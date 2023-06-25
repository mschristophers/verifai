import pandas as pd
from sklearn.preprocessing import StandardScaler

def preprocess(data):
    scaler = StandardScaler()
    processed_data = scaler.fit_transform(data)
    
    return processed_data
