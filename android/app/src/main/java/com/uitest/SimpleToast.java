package com.uitest;

import androidx.annotation.NonNull;
import com.facebook.react.bridge.Promise;

import com.facebook.react.bridge.ReactApplicationContext;

import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import android.util.Log;
import android.widget.Toast;

public class SimpleToast extends ReactContextBaseJavaModule {
    public final String TAG = "Simple Toast";
    SimpleToast(ReactApplicationContext context) {
        super(context);
    }

    @NonNull
    @Override
    public String getName() {
        return "SimpleToast";
    }


    @ReactMethod
    public void createFunction(String name, String location) {
        Toast.makeText(getReactApplicationContext(),"Test Invoke Native "+name +'\t'+location,Toast.LENGTH_SHORT).show();
    }

    @ReactMethod
    public void returnFromNative(Double params,  Promise promise) {
        Log.d(TAG, "returnFromNative: "+params);

        try {
            int event = 1;
            promise.resolve(event);
        } catch(Exception e) {
            promise.reject("Create Event Error", e);
        }
    }
}
