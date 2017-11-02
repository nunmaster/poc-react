//
//  OutputVolume.m
//  PocReact
//
//  Created by Nonthanun Sudlapa on 11/2/2560 BE.
//  Copyright © 2560 Facebook. All rights reserved.
//

#import "OutputVolume.h"
#import "React/RCTLog.h"
#import <AVFoundation/AVAudioSession.h>

@implementation OutputVolume

RCT_EXPORT_MODULE();

// We can send back a promise to our JavaScript environment :)
RCT_REMAP_METHOD(get,
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
  float volume = [AVAudioSession sharedInstance].outputVolume;
  NSString* volumeString = [NSString stringWithFormat:@"%f", volume];
  
  if (volumeString) {
    resolve(volumeString);
  } else {
    reject(@"get_error", @"Error getting system volume", nil);
  }
  
}

@end
