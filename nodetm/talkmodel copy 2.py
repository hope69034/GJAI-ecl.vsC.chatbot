# import streamlit as st
import sys
import pandas as pd
import json
from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity
from sentence_transformers import SentenceTransformer, models

# @st.cache(allow_output_mutation=True) #이거켜도속도똑같음
def cached_model():
    model = SentenceTransformer('jhgan/ko-sroberta-multitask')
    #model = SentenceTransformer('.\ko-sroberta-multitask') #로컬폴더를써도속도가같다
    return model
model = cached_model()

# @st.cache(allow_output_mutation=True)
def get_dataset():
    df = pd.read_csv('wellness_dataset.csv')
    df['embedding'] = df['embedding'].apply(json.loads)
    return df
df = get_dataset()

def getName(user_input):
    embedding = model.encode(user_input)    
    df['distance'] = df['embedding'].map(lambda x: cosine_similarity([embedding], [x]).squeeze())
    answer = df.loc[df['distance'].idxmax()] # 최댓값을 구해서 답변 뽑기
    print( answer[2])   #print( answer['챗봇'])  #print(user_input[0],user_input[1])

if __name__ == '__main__':
    getName(sys.argv[1])