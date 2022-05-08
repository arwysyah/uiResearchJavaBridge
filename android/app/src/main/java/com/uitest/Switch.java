package com.uitest;

import android.animation.Animator;
import android.annotation.SuppressLint;
import android.content.Context;
import android.graphics.Color;
import android.util.AttributeSet;
import android.view.View;

import android.widget.Button;

import java.util.jar.Attributes;

@SuppressLint("AppCompatCustomView")
public class Switch extends Button {
    public Boolean isTurnedOn = false;

    public void setIsTurnedOn(Boolean switchStatus) {
        isTurnedOn = switchStatus;
        changeColor();
    }

    public Switch(Context context) {
        super(context);
        this.setTextColor(Color.RED);
        this.setText("This is Button Native");
        this.setOnClickListener(new OnClickListener() {
            @Override
            public void onClick(View v) {
                isTurnedOn = !isTurnedOn;
                changeColor();
                animatedView();
            }
        });
        changeColor();
    }

    public Switch(Context context, Boolean isTurnedOn) {
        super(context);
        this.isTurnedOn = isTurnedOn;
    }

    private void animatedView() {
//    new TranslateAnimation(0, 100, 0, 100);
//    Animator trans = null;
//    trans.setDuration(250);
//    trans.setInterpolator(new AccelerateInterpolator(1.0f));

        if (isTurnedOn) {
//            AnimationSet set = new AnimationSet(true);
//            Animation translate = new TranslateAnimation(-100, 0, 0, 0);
//            translate.setDuration(900);
//            set.addAnimation(translate);
            animate().translationYBy(2000).setDuration(300);
            setTranslationY(100);
        }
    }


    private void changeColor() {
        if (isTurnedOn) {
            setBackgroundColor(Color.GREEN);
            setText("I am GREEN");
            setTextSize(12);
//            AnimationSet set = new AnimationSet( true );
//            Animation translate = new TranslateAnimation( -100, 0, 0, 0);
//            translate.setDuration( 900 );
//            set.addAnimation( translate );

        } else {
            setBackgroundColor(Color.BLUE);
            setText("I am BLUE");
            setTextSize(12);
        }
    }

    public Switch(Context context, Attributes attrs) {
        super(context, (AttributeSet) attrs);
    }

    public Switch(Context context, Attributes attrs, int style) {
        super(context, (AttributeSet) attrs, style);
    }


}
