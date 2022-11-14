import streamlit as st

import sys
import pandas as pd
import json
#from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity

from sentence_transformers import SentenceTransformer, models

import torchvision
from torchvision import transforms
import os
from torch.utils.data import Dataset,DataLoader
import torch
import tensorflow as tf

from tensorflow import keras

#device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
#model = torch.load(PATH, map_location=device)
#model = keras.models.load_model('./ko-sroberta-multitask/tf_model')
#model = keras.models.load_model(PATH)
 
#model.load_state_dict(torch.load(PATH))
#model.load_state_dict(torch.load('C:/Workspace/reactChatbot/nodetm/ko-sroberta-multitask/pytorch_model.bin',map_location=torch.device('cpu')))
#model.eval()

#PATH = 'C:\Workspace\reactChatbot\nodetm\ko-sroberta-multitask'
#device = torch.device('cpu')
#model = SentenceTransformer(PATH)
#model = torch.load(PATH)

    
#PATH = 'C:\Workspace\reactChatbot\nodetm\ko-sroberta-multitask\pytorch_model.bin'
#device = torch.device('cpu')
#model = SentenceTransformer()
#model.load_state_dict(torch.load(PATH, map_location=device))

#model.load_state_dict(torch.load(PATH, map_location=device))

# @st.cache(allow_output_mutation=True) #이거켜도속도똑같음
#def cached_model():
 #   model = SentenceTransformer('jhgan/ko-sroberta-multitask')
  #  return model
#model = cached_model()





# Load Embedding Model

#@st.cache(allow_output_mutation=True)
embedding_model = models.Transformer(
    model_name_or_path=".\ko-sroberta-multitask", 
    max_seq_length=256,
    do_lower_case=True
)

# Only use Mean Pooling -> Pooling all token embedding vectors of sentence.
pooling_model = models.Pooling(
    embedding_model.get_word_embedding_dimension(),
    pooling_mode_mean_tokens=True,
    pooling_mode_cls_token=False,
    pooling_mode_max_tokens=False,
)

model = SentenceTransformer(modules=[embedding_model, pooling_model])









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
    #getName(sys.argv[1])
    getName('기')
    