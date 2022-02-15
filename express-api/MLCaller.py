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
import sys;

# features =  [
#             'HP', 'AC', 
#             "Base Speed","Fly Speed","Burrow Speed","Swim Speed","Climb Speed", 
#             'STR', "DEX","CON","INT","WIS","CHA", 
#             "Number Of Passive Abilities","Number of Actions",
#             'Max. Damage Roll', 'Max. Attack Bonus', 
#             'Number of Legendary Actions', 
#             'Number of Immunities', 'Number of Resistances'];

clf: any;

# Save model using pickle
pickle_filename = 'MLModel.pkl'
with open(pickle_filename, 'rb') as file:
    clf = pickle.load(file)

arguments = list(map(int, sys.argv[1:21]))

dataExample = [arguments]

predicedCR = clf.predict(dataExample)[0];

print(round(predicedCR));