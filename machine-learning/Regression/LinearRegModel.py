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
features =  ['HP', 'AC', "Base Speed","Fly Speed","Burrow Speed","Swim Speed","Climb Speed", 'STR', "DEX","CON","INT","WIS","CHA", "Number Of Passive Abilities","Number of Actions",'Max. Damage Roll', 'Max. Attack Bonus', 'Number of Legendary Actions', 'Number of Immunities', 'Number of Resistances'];

dataframe = pd.read_csv(input_file, usecols=headings);

X = dataframe[features];
y = dataframe['CR'];

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3);

clf = LinearRegression();

print(X_test.head());

clf = clf.fit(X_train, y_train);

# Save model using pickle
pickle_filename = 'MLModel.pkl'
with open(pickle_filename, 'wb') as file:
    pickle.dump(clf, file)

# y_pred = clf.predict(X_test);

# scores = cross_val_score(clf, X, y, cv=5)

# print(scores);

# print("%0.2f accuracy with a standard deviation of %0.2f" % (scores.mean(), scores.std()))

# differences = []

# for test in y_test:
#     differences.append(test);

# successes = 0;
# pm2 = 0;

# i = 0;
# while i < len(y_pred):
#     y_pred[i] = round(y_pred[i]);
#     i+=1;

# i = 0;
# while i < len(y_pred):
#     differences[i] = differences[i] - y_pred[i];
#     if(differences[i] <= 2):
#         pm2 += 1;
#     if(differences[i] == 0):
#         successes += 1;
#     if(differences[i] >= 9 or differences[i] <= -9):
#         print(i);
#         print("-----------")
#     i+=1;

# print("PM2: ", (pm2 / len(y_pred)));
# print("Exact: ", (successes / len(y_pred)));

# print("R2: ", r2_score(y_test, y_pred));

# # Calculate adjusted R2
# N=y_test.shape[0]
# p=len(features)
# a = (1-r2_score(y_test, y_pred))
# b = (N-1) / (N-p-1)
# adj_rsquared = (1 - (a * b))
# print("Adjusted-R2 : " , adj_rsquared)

# print("RMS:", np.sqrt(metrics.mean_squared_error(y_test, y_pred)))

# plt.hist(differences, range=(-12, 12), bins=24);
# plt.xticks(np.arange(-12, 12, 1))

# plt.show()