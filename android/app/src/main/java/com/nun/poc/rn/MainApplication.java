package com.nun.poc.rn;

import android.app.Application;

import com.AlexanderZaytsev.RNI18n.RNI18nPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.airbnb.android.react.maps.MapsPackage;
import com.brentvatne.react.ReactVideoPackage;
import com.dylanvann.fastimage.FastImageViewPackage;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.hieuvp.fingerprint.ReactNativeFingerprintScannerPackage;
import com.horcrux.svg.SvgPackage;
import com.imagepicker.ImagePickerPackage;
import com.kevinejohn.RNMixpanel.RNMixpanel;
import com.lwansbrough.RCTCamera.RCTCameraPackage;
import com.lynxit.contactswrapper.ContactsWrapperPackage;
import com.microsoft.codepush.react.CodePush;
import com.oblador.vectoricons.VectorIconsPackage;
import com.react.rnspinkit.RNSpinkitPackage;
import com.reactnative.photoview.PhotoViewPackage;
import com.zmxv.RNSound.RNSoundPackage;

import java.util.Arrays;
import java.util.List;

import cl.json.RNSharePackage;
import io.invertase.firebase.RNFirebasePackage;
import io.invertase.firebase.auth.RNFirebaseAuthPackage;
import io.invertase.firebase.database.RNFirebaseDatabasePackage;
import io.invertase.firebase.messaging.RNFirebaseMessagingPackage;
import me.jhen.react.BadgePackage;

public class MainApplication extends Application implements ReactApplication {

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {

        @Override
        protected String getJSBundleFile() {
            return CodePush.getJSBundleFile();
        }

        @Override
        public boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(new RNMixpanel(), new MainReactPackage(),
                    new RNI18nPackage(),
                    new RNSoundPackage(),
                    new LinearGradientPackage(),
                    new PhotoViewPackage(), new SvgPackage(),
                    new ReactNativeFingerprintScannerPackage(), new BadgePackage(), new RNSharePackage(), new RNSpinkitPackage(),
                    new ReactVideoPackage(), new RCTCameraPackage(),
                    new CodePush(getResources().getString(R.string.reactNativeCodePush_androidDeploymentKey),
                            getApplicationContext(), BuildConfig.DEBUG),
                    new RNFirebasePackage(), new RNFirebaseAuthPackage(), new RNFirebaseDatabasePackage(),
                    new RNFirebaseMessagingPackage(),

                    new VectorIconsPackage(), new MapsPackage(), new ImagePickerPackage(), new FastImageViewPackage(),
                    new ContactsWrapperPackage(),
                    new ToastReactPackage());
        }

        @Override
        protected String getJSMainModuleName() {
            return "index";
        }
    };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        SoLoader.init(this, /* native exopackage */ false);
    }
}
