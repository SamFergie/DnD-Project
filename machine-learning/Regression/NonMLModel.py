import math
import numpy as np;
import pandas as pd;
import sklearn;
from sklearn import metrics;
from sklearn.model_selection import train_test_split;
from sklearn.linear_model import LinearRegression;
from sklearn.model_selection import cross_val_score
from sklearn.metrics import r2_score;
import matplotlib.pyplot as plt;
import pickle;

input_file = "monster data3.csv";

headings = ['CR', 'HP', 'AC', "Base Speed","Fly Speed","Burrow Speed","Swim Speed","Climb Speed", 'STR', "DEX","CON","INT","WIS","CHA", "Number Of Passive Abilities","Number of Actions", 'Max. Damage Roll', 'Max. Attack Bonus', 'Number of Legendary Actions', 'Number of Immunities', 'Number of Resistances'];
features =  ['HP'];

dataframe = pd.read_csv(input_file, usecols=headings);

X = dataframe[features];
y = dataframe['CR'];

y_pred = [None] * len(X)
i = 0
while i < len(X):
    if(X['HP'][i] < 7):
        y_pred[i] = 0
    elif(X['HP'][i] < 36):
        y_pred[i] = 1;
    elif(X['HP'][i] < 50):
        y_pred[i] = 2;
    elif(X['HP'][i] < 71):
        y_pred[i] = 3;
    elif(X['HP'][i] < 86):
        y_pred[i] = 4;
    elif(X['HP'][i] < 101):
        y_pred[i] = 5;
    elif(X['HP'][i] < 116):
        y_pred[i] = 6;
    elif(X['HP'][i] < 131):
        y_pred[i] = 7;
    elif(X['HP'][i] < 146):
        y_pred[i] = 8;
    elif(X['HP'][i] < 161):
        y_pred[i] = 9;
    elif(X['HP'][i] < 176):
        y_pred[i] = 10;
    elif(X['HP'][i] < 191):
        y_pred[i] = 11;
    elif(X['HP'][i] < 206):
        y_pred[i] = 12;
    elif(X['HP'][i] < 221):
        y_pred[i] = 13;
    elif(X['HP'][i] < 236):
        y_pred[i] = 14;
    elif(X['HP'][i] < 251):
        y_pred[i] = 15;
    elif(X['HP'][i] < 266):
        y_pred[i] = 16;
    elif(X['HP'][i] < 281):
        y_pred[i] = 17;
    elif(X['HP'][i] < 296):
        y_pred[i] = 18;
    elif(X['HP'][i] < 311):
        y_pred[i] = 19;
    elif(X['HP'][i] < 326):
        y_pred[i] = 20;
    elif(X['HP'][i] < 341):
        y_pred[i] = 21;
    elif(X['HP'][i] < 356):
        y_pred[i] = 22;
    elif(X['HP'][i] < 401):
        y_pred[i] = 23;
    elif(X['HP'][i] < 446):
        y_pred[i] = 24;
    elif(X['HP'][i] < 491):
        y_pred[i] = 25;
    elif(X['HP'][i] < 536):
        y_pred[i] = 26;
    elif(X['HP'][i] < 581):
        y_pred[i] = 27;
    elif(X['HP'][i] < 626):
        y_pred[i] = 28;
    elif(X['HP'][i] < 671):
        y_pred[i] = 29;
    elif(X['HP'][i] < 716):
        y_pred[i] = 30;
    elif(X['HP'][i] < 761):
        y_pred[i] = 31;
    elif(X['HP'][i] < 806):
        y_pred[i] = 32;
    elif(X['HP'][i] < 851):
        y_pred[i] = 33;
    else:
        print("Error");
    i+=1

differences = [None] * len(y_pred);
successes = 0;
pm2 = 0;

i = 0;
while i < len(y_pred):
    differences[i] = abs(y[i] - y_pred[i]);
    if(differences[i] == 0):
        successes += 1;
    if(differences[i] < 2):
        pm2 += 1;
    i+=1;

print("PM2: ", (pm2 / len(y_pred)));
print("Exact: ", (successes / len(y_pred)));

print("R2: ", r2_score(y, y_pred));

# # Calculate adjusted R2
N=y.shape[0]
p=len(features)
a = (1-r2_score(y, y_pred))
b = (N-1) / (N-p-1)
adj_rsquared = (1 - (a * b))
print("Adjusted-R2 : " , adj_rsquared)

print("RMS:", np.sqrt(metrics.mean_squared_error(y, y_pred)))