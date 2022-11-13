import sys

import pandas as pd
import json
from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity

# import streamlit as st
# from streamlit_chat import message

# @st.cache(allow_output_mutation=True)
def cached_model():
    model = SentenceTransformer('jhgan/ko-sroberta-multitask')
    return model

# @st.cache(allow_output_mutation=True)
def get_dataset():
    df = pd.read_csv('wellness_dataset.csv')
    df['embedding'] = df['embedding'].apply(json.loads)
    return df

model = cached_model()
df = get_dataset()

def getName(user_input):
    embedding = model.encode(user_input)    
    df['distance'] = df['embedding'].map(lambda x: cosine_similarity([embedding], [x]).squeeze())
    answer = df.loc[df['distance'].idxmax()] # 최댓값을 구해서 답변 뽑기
    #print(user_input[0],user_input[1])
    print( answer['챗봇'])
    #return answer

#def main(inp):
 #   print(inp[0])

if __name__ == '__main__':
 #   main(sys.argv[1])
    getName(sys.argv[1])
#if __name__ == '__main__':
    #getName('기분 좋아')