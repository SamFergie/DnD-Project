import numpy as np;
import pandas as pd;
import sklearn;
from sklearn import metrics;
from sklearn.model_selection import train_test_split;
from sklearn.linear_model import LinearRegression;
from sklearn.model_selection import cross_val_score
from sklearn.metrics import r2_score;
import matplotlib.pyplot as plt
import pickle;

features =  [
            'HP', 'AC', 
            "Base Speed","Fly Speed","Burrow Speed","Swim Speed","Climb Speed", 
            'STR', "DEX","CON","INT","WIS","CHA", 
            "Number Of Passive Abilities","Number of Actions",
            'Max. Damage Roll', 'Max. Attack Bonus', 
            'Number of Legendary Actions', 
            'Number of Immunities', 'Number of Resistances'];

clf: any;

# Save model using pickle
pickle_filename = 'MLModel.pkl'
with open(pickle_filename, 'rb') as file:
    clf = pickle.load(file)

# Howler,5,Large,45,14,50,0,0,0,0,0,19,15,15,8,14,8,None,0,12,0,60,0,0,2,3,6,16,No,0,0,0,None,0,0,0,None,,0,,0,None

# Target: 5

dataExample = [[
        45, 14,
        50, 0, 0, 0, 0,
        19, 15, 15, 8, 14, 8,
        2, 3,
        16, 6,
        0, 
        0, 0
]]

print(clf.predict(dataExample))