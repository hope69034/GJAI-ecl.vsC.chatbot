# 스트림릿 라이브러리를 사용하기 위한 임포트
import streamlit as st
from streamlit_chat import message
import pandas as pd
from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity
import json

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

# st.header("AI 비서 '그리니'의 심리상담")

# generated 챗봇의말을저장하는세션 선언
# if 'generated' not in st.session_state:
  #   st.session_state['generated'] = []

# past 유저의말을저장하는세션 선언
# if 'past' not in st.session_state:
  #   st.session_state['past'] = []



# 유저가 인풋 넣는 부분과 전송 버튼
#with st.form('form', clear_on_submit=True):
 #   user_input = st.text_input('나: ','')
  #  submitted = st.form_submit_button('말하기')




# 채팅 출력단
# for i in range(len(st.session_state['past'])):
  #   print(st.session_state['past'][i])
    # if len(st.session_state['generated']) > i:
      #   print(st.session_state['generated'][i])

def main(inp):
    user_input = inp
    #  트루면
    if user_input:
        embedding = model.encode(user_input) # 인풋을 임베딩 숫자화

        # 임베딩 결과를 이미 구축한 챗봇데이터셋df['embedding']=[x]과 코사인유사도 구하기 
        df['distance'] = df['embedding'].map(lambda x: cosine_similarity([embedding], [x]).squeeze())
        answer = df.loc[df['distance'].idxmax()] # 최댓값을 구해서 답변 뽑기

        # print(user_input) 
        print(answer[2])
    
if __name__ == "__main__":
    main('str')