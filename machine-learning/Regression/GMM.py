import numpy as np;
import pandas as pd;
import sklearn;
from sklearn import metrics;
from sklearn.cluster import *
from sklearn.mixture import GaussianMixture;
from sklearn.model_selection import train_test_split;
from sklearn.linear_model import LinearRegression;
from sklearn.model_selection import cross_val_score
from sklearn.metrics import r2_score;
import matplotlib.pyplot as plt;
import pickle;
import seaborn as sn;

input_file = "monster data3.csv";

headings = ['CR', 'HP', 'AC', "Base Speed","Fly Speed","Burrow Speed","Swim Speed","Climb Speed", 'STR', "DEX","CON","INT","WIS","CHA", "Number Of Passive Abilities","Number of Actions", 'Max. Damage Roll', 'Max. Attack Bonus', 'Number of Legendary Actions', 'Number of Immunities', 'Number of Resistances'];
features = ['HP', 'AC', "Base Speed","Fly Speed","Burrow Speed","Swim Speed","Climb Speed", 'STR', "DEX","CON","INT","WIS","CHA", "Number Of Passive Abilities","Number of Actions", 'Max. Damage Roll', 'Max. Attack Bonus', 'Number of Legendary Actions', 'Number of Immunities', 'Number of Resistances'];

dataframe = pd.read_csv(input_file, usecols=headings);

X = dataframe[features];
y = dataframe['CR'];

# sn.heatmap(dataframe.corr(), annot=True)
# plt.show()

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3);

clf = GaussianMixture();

clf = clf.fit(X_train);

y_pred = clf.predict(X_test);

differences = []

for test in y_test:
    differences.append(test);

successes = 0;
pm2 = 0;

i = 0;
while i < len(y_pred):
    y_pred[i] = round(y_pred[i]);
    i+=1;

i = 0;
while i < len(y_pred):
    differences[i] = differences[i] - y_pred[i];
    if(differences[i] <= 2):
        pm2 += 1;
    if(differences[i] == 0):
        successes += 1;
    if(differences[i] >= 9 or differences[i] <= -9):
        print(i);
        print("-----------")
    i+=1;

print("PM2: ", (pm2 / len(y_pred)));
print("Exact: ", (successes / len(y_pred)));

print("RMS:", np.sqrt(metrics.mean_squared_error(y_test, y_pred)))