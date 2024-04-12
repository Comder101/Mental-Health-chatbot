from django.shortcuts import render


import speech_recognition as sr

import spacy

nlp = spacy.load("en_core_web_sm")

from django.http import JsonResponse
from django.shortcuts import render

import pyttsx3 


import chatterbot 
from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer
from chatterbot.trainers import ListTrainer
# from chatterbot import exceptions

chatbot = ChatBot('Voice Chatbot')
trainer = ChatterBotCorpusTrainer(chatbot)
trainer.train('chatterbot.corpus.english')

trainerl =  ListTrainer(chatbot)
chatbot.storage.drop()
import csv



with open(r'20200325_counsel_chat.csv', 'r', encoding='utf-8') as file:
    reader = csv.DictReader(file)
    for row in reader:
        question = row['questionText']
        response = row['answerText']
        trainerl.train([question, response])

def index(request):
    return render(request,'index.html')

def get_response(request):
    user_message = request.GET.get('message')
    try:
        bot_response = str(chatbot.get_response(user_message))
    except (chatterbot.exceptions.MatchedResponse, IndexError):  
        bot_response = "I'm afraid I didn't quite understand your request. As a mental health chatbot, I'm here to provide support, resources, and information related to mental health and well-being. Please feel free to rephrase your question or ask for specific topics you'd like to discuss."
 
    return JsonResponse({'message': bot_response})