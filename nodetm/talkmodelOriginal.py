import streamlit as st
from streamlit_chat import message
import pandas as pd
from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity
import json

import sys

@st.cache(allow_output_mutation=True)
def cached_model():
    model = SentenceTransformer('jhgan/ko-sroberta-multitask')
    return model

@st.cache(allow_output_mutation=True)
def get_dataset():
    df = pd.read_csv('wellness_dataset.csv')
    df['embedding'] = df['embedding'].apply(json.loads)
    return df

model = cached_model()
df = get_dataset()

st.header('심리상담 챗봇')
st.markdown("[❤️빵형의 개발도상국](https://www.youtube.com/c/빵형의개발도상국)")

if 'generated' not in st.session_state:
    st.session_state['generated'] = []

if 'past' not in st.session_state:
    st.session_state['past'] = []

with st.form('form', clear_on_submit=True):
    submitted = st.form_submit_button('전송')
    user_input = st.text_input('당신: ', '')
   
if user_input:
  embedding = model.encode(user_input)    
  df['distance'] = df['embedding'].map(lambda x: cosine_similarity([embedding], [x]).squeeze())
  answer = df.loc[df['distance'].idxmax()] # 최댓값을 구해서 답변 뽑기
  #print( answer[2])   #print( answer['챗봇'])  #print(user_input[0],user_input[1])
  message(answer)

 