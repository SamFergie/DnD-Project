# DNDProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Techniques

## Decision Tree

### Pros

Problem is not a continuous data range so a decision tree classifier could work. Very simple system, easy to visualise.

Minimal data pre-processing

### Cons

Risk of overfitting. Can be reduced with k-fold cross validation

Decision trees can be limited with lots of features, so random forests could be better.

## Random forests

They are a series of decision trees made at training time. 

The output is the class selected by most trees.

## Naive Bayes Classifier

### Pros

Can combine all the features of the dataset to approximate probability

### Cons

The accuracy can suffer if the features are not indepedent (I suspect the features are not independent)

## K-NN

### Pros

Non-parametric so more data makes the model more complex

No training phase, simple store the training data. So little computing power needed.

### Cons

Curse of dimensionality. Lots of features will need exponentially more data to fill the high-dimensionsal space.

So if we plan on using ~25 features, would require huge amounts of data.

## Keras

Possible machine learning framework/library

# Usability information

## Heuristics

### Visibility of System Status

Loading bars for machine learning process/saving/loading data from database

### Match between System and the Real World

Use D&D language.

Study web forms and design a natural progression to filling out information.

### User control and freedom

Add buttons such as undo/redo and make it clear for the user how they can perform certain tasks

### Consistency and Standards

Develop a lexicon of terms to use in any user facing components to ensure consistency.

Look at other D&D based websites (DNDbeyond)

### Error Prevention

Implement robust input checks

### Recognition rather than recall

Implement an optional login system that means a user can save data they have input (alongside the ML results) to save inputting information multiple times.

### Flexibility and Efficiency of Use 

