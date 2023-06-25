from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense

def train_model(data, labels):
    model = Sequential()
    model.add(Dense(32, activation='relu', input_dim=data.shape[1]))
    model.add(Dense(1, activation='sigmoid'))

    model.compile(optimizer='adam',
                  loss='binary_crossentropy',
                  metrics=['accuracy'])

    model.fit(data, labels, epochs=10, batch_size=32)
    
    return model
