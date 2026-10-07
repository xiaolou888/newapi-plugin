export const meta = {
  "apiVersion": 1,
  "key": "22222",
  "name": "22222",
  "icon": "text",
  "description": {
    "en": "22222",
    "zh": "22222"
  },
  "version": "1.0.0",
  "author": {
    "name": "ZZH"
  },
  "models": [
    "gpt-image-2",
    "gpt-image-2-2K",
    "gpt-image-2-4K",
    "gpt-image-2.5",
    "gpt-image-2.5-flare",
    "gpt-image-2.5-sunburst",
    "nano_banana_2",
    "nano_banana_2-2K",
    "nano_banana_2-4K",
    "nano_banana_pro-1K",
    "nano_banana_pro-2K",
    "nano_banana_pro-4K",
    "nano-banana-2.1",
    "omni_flash-10s",
    "omni_flash-10s-fl",
    "omni_flash-hd-10s",
    "omni_flash-hd-10s-fl",
    "veo_3_1-lite",
    "veo_3_1-lite-fl",
    "veo_3_1-lite-hd",
    "veo_3_1-lite-hd-fl",
    "veo_3_1-fast",
    "veo_3_1-fast-fl",
    "grok-imagine-video-1.5",
    "grok-imagine-video-1.5-lite",
    "grok-imagine-video-1.5-fast",
    "seedance-2.0",
    "seedance-2.5-10s",
    "seedance-2.5-15s",
    "seedance-2.5-30s",
    "seedance-2.0-mini",
    "minimax-h3-max",
    "minimax-h3"
  ],
  "fetchMode": "per_task",
  "protocols": [
    "openai_video"
  ],
  "allowedHosts": [
    "zexapi.com"
  ],
  "auth": "api_key",
  "usageProfiles": [
    {
      "models": [
        "omni_flash-10s",
        "omni_flash-10s-fl",
        "veo_3_1-lite",
        "veo_3_1-lite-fl",
        "veo_3_1-fast",
        "veo_3_1-fast-fl"
      ],
      "schema": {
        "resolution": {
          "enum": [
            "720p"
          ],
          "description": {
            "en": "Video resolution",
            "zh": "视频分辨率"
          }
        },
        "request_count": {
          "type": "number",
          "unit": "count",
          "unitLabel": {
            "en": "request",
            "zh": "次",
            "zh-TW": "次",
            "ja": "回",
            "fr": "requête",
            "ru": "запрос",
            "vi": "lượt"
          },
          "description": {
            "en": "Video generation price",
            "zh": "视频生成价格",
            "zh-TW": "影片生成價格",
            "ja": "動画生成価格",
            "fr": "Prix de génération vidéo",
            "ru": "Цена генерации видео",
            "vi": "Giá tạo video"
          }
        }
      }
    },
    {
      "models": [
        "omni_flash-hd-10s",
        "omni_flash-hd-10s-fl",
        "veo_3_1-lite-hd",
        "veo_3_1-lite-hd-fl"
      ],
      "schema": {
        "resolution": {
          "enum": [
            "1080p"
          ],
          "description": {
            "en": "Video resolution",
            "zh": "视频分辨率"
          }
        },
        "request_count": {
          "type": "number",
          "unit": "count",
          "unitLabel": {
            "en": "request",
            "zh": "次",
            "zh-TW": "次",
            "ja": "回",
            "fr": "requête",
            "ru": "запрос",
            "vi": "lượt"
          },
          "description": {
            "en": "Video generation price",
            "zh": "视频生成价格",
            "zh-TW": "影片生成價格",
            "ja": "動画生成価格",
            "fr": "Prix de génération vidéo",
            "ru": "Цена генерации видео",
            "vi": "Giá tạo video"
          }
        }
      }
    },
    {
      "models": [
        "grok-imagine-video-1.5",
        "grok-imagine-video-1.5-lite",
        "grok-imagine-video-1.5-fast",
        "seedance-2.0",
        "seedance-2.5-10s",
        "seedance-2.5-15s",
        "seedance-2.5-30s",
        "seedance-2.0-mini"
      ],
      "schema": {
        "resolution": {
          "enum": [
            "480p",
            "720p",
            "768p",
            "1080p",
            "2K",
            "4K"
          ],
          "description": {
            "en": "Video resolution",
            "zh": "视频分辨率"
          }
        },
        "request_count": {
          "type": "number",
          "unit": "count",
          "unitLabel": {
            "en": "request",
            "zh": "次",
            "zh-TW": "次",
            "ja": "回",
            "fr": "requête",
            "ru": "запрос",
            "vi": "lượt"
          },
          "description": {
            "en": "Video generation price",
            "zh": "视频生成价格",
            "zh-TW": "影片生成價格",
            "ja": "動画生成価格",
            "fr": "Prix de génération vidéo",
            "ru": "Цена генерации видео",
            "vi": "Giá tạo video"
          }
        }
      }
    },
    {
      "models": [
        "minimax-h3-max",
        "minimax-h3"
      ],
      "schema": {
        "resolution": {
          "enum": [
            "480p",
            "720p",
            "768p",
            "1080p",
            "2K",
            "4K"
          ],
          "description": {
            "en": "Video resolution",
            "zh": "视频分辨率"
          }
        },
        "seconds": {
          "type": "number",
          "unit": "second",
          "description": {
            "en": "Video generation unit price",
            "zh": "视频生成单价"
          }
        }
      }
    },
    {
      "models": [
        "gpt-image-2",
        "gpt-image-2.5-flare",
        "gpt-image-2.5-sunburst",
        "nano_banana_2",
        "nano-banana-2.1"
      ],
      "schema": {
        "resolution": {
          "enum": [
            "1K",
            "2K",
            "4K"
          ],
          "description": {
            "en": "Image resolution",
            "zh": "图片分辨率"
          }
        },
        "image_count": {
          "type": "number",
          "unit": "count",
          "unitLabel": {
            "en": "image",
            "zh": "张"
          },
          "description": {
            "en": "Image generation unit price",
            "zh": "图片生成单价"
          }
        }
      }
    },
    {
      "models": [
        "gpt-image-2-2K",
        "nano_banana_2-2K",
        "nano_banana_pro-2K"
      ],
      "schema": {
        "resolution": {
          "enum": [
            "2K"
          ],
          "description": {
            "en": "Image resolution",
            "zh": "图片分辨率"
          }
        },
        "image_count": {
          "type": "number",
          "unit": "count",
          "unitLabel": {
            "en": "image",
            "zh": "张"
          },
          "description": {
            "en": "Image generation unit price",
            "zh": "图片生成单价"
          }
        }
      }
    },
    {
      "models": [
        "gpt-image-2-4K",
        "nano_banana_2-4K",
        "nano_banana_pro-4K"
      ],
      "schema": {
        "resolution": {
          "enum": [
            "4K"
          ],
          "description": {
            "en": "Image resolution",
            "zh": "图片分辨率"
          }
        },
        "image_count": {
          "type": "number",
          "unit": "count",
          "unitLabel": {
            "en": "image",
            "zh": "张"
          },
          "description": {
            "en": "Image generation unit price",
            "zh": "图片生成单价"
          }
        }
      }
    },
    {
      "models": [
        "gpt-image-2.5",
        "nano_banana_pro-1K"
      ],
      "schema": {
        "resolution": {
          "enum": [
            "1K"
          ],
          "description": {
            "en": "Image resolution",
            "zh": "图片分辨率"
          }
        },
        "image_count": {
          "type": "number",
          "unit": "count",
          "unitLabel": {
            "en": "image",
            "zh": "张"
          },
          "description": {
            "en": "Image generation unit price",
            "zh": "图片生成单价"
          }
        }
      }
    }
  ]
};

const OSS_URL = "";
// 比例表：手改像素或后缀只改这里。
const RATIO_MAP = {
  "1:1": {
    "1K": "1024x1024",
    "2K": "2048x2048",
    "4K": "2880x2880",
    "suffixAxis": "1x1",  // 拼成 xxx-1x1
    "suffixSlash": "1/1",  // 拼成 xxx-1/1
    "suffixColon": "1:1",  // 拼成 xxx-1:1
    "videoEnabled": false
  },
  "16:9": {
    "1K": "1280x720",
    "2K": "2560x1440",
    "4K": "3840x2160",
    "suffixAxis": "16x9",  // 拼成 xxx-16x9
    "suffixSlash": "16/9",  // 拼成 xxx-16/9
    "suffixColon": "16:9",  // 拼成 xxx-16:9
    "videoEnabled": true
  },
  "9:16": {
    "1K": "720x1280",
    "2K": "1440x2560",
    "4K": "2160x3840",
    "suffixAxis": "9x16",  // 拼成 xxx-9x16
    "suffixSlash": "9/16",  // 拼成 xxx-9/16
    "suffixColon": "9:16",  // 拼成 xxx-9:16
    "videoEnabled": true
  },
  "4:3": {
    "1K": "1152x864",
    "2K": "2304x1728",
    "4K": "3264x2448",
    "suffixAxis": "4x3",  // 拼成 xxx-4x3
    "suffixSlash": "4/3",  // 拼成 xxx-4/3
    "suffixColon": "4:3",  // 拼成 xxx-4:3
    "videoEnabled": false
  },
  "3:4": {
    "1K": "864x1152",
    "2K": "1728x2304",
    "4K": "2448x3264",
    "suffixAxis": "3x4",  // 拼成 xxx-3x4
    "suffixSlash": "3/4",  // 拼成 xxx-3/4
    "suffixColon": "3:4",  // 拼成 xxx-3:4
    "videoEnabled": false
  },
  "3:2": {
    "1K": "1248x832",
    "2K": "2496x1664",
    "4K": "3504x2336",
    "suffixAxis": "3x2",  // 拼成 xxx-3x2
    "suffixSlash": "3/2",  // 拼成 xxx-3/2
    "suffixColon": "3:2",  // 拼成 xxx-3:2
    "videoEnabled": false
  },
  "2:3": {
    "1K": "832x1248",
    "2K": "1664x2496",
    "4K": "2336x3504",
    "suffixAxis": "2x3",  // 拼成 xxx-2x3
    "suffixSlash": "2/3",  // 拼成 xxx-2/3
    "suffixColon": "2:3",  // 拼成 xxx-2:3
    "videoEnabled": false
  },
  "5:4": {
    "1K": "1120x896",
    "2K": "2240x1792",
    "4K": "3200x2560",
    "suffixAxis": "5x4",  // 拼成 xxx-5x4
    "suffixSlash": "5/4",  // 拼成 xxx-5/4
    "suffixColon": "5:4",  // 拼成 xxx-5:4
    "videoEnabled": false
  },
  "4:5": {
    "1K": "896x1120",
    "2K": "1792x2240",
    "4K": "2560x3200",
    "suffixAxis": "4x5",  // 拼成 xxx-4x5
    "suffixSlash": "4/5",  // 拼成 xxx-4/5
    "suffixColon": "4:5",  // 拼成 xxx-4:5
    "videoEnabled": false
  },
  "21:9": {
    "1K": "1456x624",
    "2K": "3024x1296",
    "4K": "3696x1584",
    "suffixAxis": "21x9",  // 拼成 xxx-21x9
    "suffixSlash": "21/9",  // 拼成 xxx-21/9
    "suffixColon": "21:9",  // 拼成 xxx-21:9
    "videoEnabled": false
  }
};
// 通道协议。上游成功地址改 resultPath；模型映射改下面 models。
const PROFILE = {
  "ossUrl": "",
  "ossTimeoutSeconds": 15,
  "ossAttempts": 3,
  "ossMaxFailures": 5,
  "ossFailureAction": "fallback_success",
  "mediaProxyBaseUrl": "https://zexapi.com/agent-api",
  "secondaryPollMode": "per_task",
  "batchMethod": "POST",
  "batchPath": "",
  "batchIdsField": "ids",
  "batchItemsPath": "data",
  "batchTaskIdPath": "id",
  "batchSize": 40,
  "objectType": "mixed",
  "aspectField": "aspect_ratio",
  "imageSizeField": "image_size",
  "createMethod": "POST",
  "createPath": "/v1/videos",
  "createQuery": {},
  "byReferenceImage": null,
  "queryMethod": "GET",
  // 轮询 GET：queryPath + queryQuery，例如 /v1/videos/{id}?detail=true。手改这两行。
  "queryPath": "/v1/videos/{id}",
  "queryQuery": {},
  "taskIdPath": "id",
  // 上游成功地址：手改这一行（点路径，例如 detail.data[0].origin_url）
  "resultPath": "url",
  "aspectAccept": [
    "aspect_ratio",
    "aspectRatio",
    "metadata.aspect_ratio",
    "metadata.aspectRatio"
  ],
  "refAccept": [
    "images",
    "input_reference",
    "image",
    "reference_images",
    "input_reference[]",
    "metadata.urls"
  ],
  "videoRefAccept": [
    "video",
    "video_url",
    "videos",
    "input_video"
  ],
  "audioRefAccept": [
    "audio_url",
    "audio",
    "reference_audio",
    "audios",
    "input_audio"
  ],
  "refMax": 8,
  "contentType": "json",
  "formImageField": "input_reference",
  "responseFormatMode": "off",
  "responseFormatValue": "url",
  "extraFields": [],
  "models": [
    {
      "downstream": "gpt-image-2",
      "upstream": "gpt-image-2",
      "resolution": "1K",
      "supportedResolutions": ["1K","2K","4K"],
      "videoAspectRatios": ["16:9","9:16","1:1","4:3","3:4","21:9"],
      "duration": false,
      "firstLastFrameMode": "off",
      "sendMode": "pixel",
      "suffixStyle": "axis",
      "defaultAspect": "omit",
      "objectType": "image",
      "mediaMaps": [{"kind":"images_all","from":"","to":"images","outputMode":"array"}],
      "imageMaps": [{"kind":"images_all","from":"","to":"images"}],
      "imageField": "images",
      "firstFrameField": "",
      "lastFrameField": "",
      "sendSize": true,
      "sendAspect": false,
      "sendImageSize": false,
      "aspectField": "",
      "imageSizeField": "",
      "videoSizeMap": {},
      "qualityMode": "off",
      "qualityValue": "medium",
      "sendQuality": false,
      "sendSeconds": false,
      "secondsUpstream": "off",
      "defaultSeconds": 0,
      "billBySeconds": false,
      "requestCountField": "request_count",
      "billByImageCount": false,
      "allowVideoUpload": false,
      "maxReferenceVideos": 1,
      "billByReferenceVideo": false,
      "billByInputVideoSeconds": false,
      "inputVideoReserveSeconds": 15,
      "inputVideoMaxSeconds": 15,
      "inputVideoSecondsPath": "usage.input_seconds",
      "audioField": "",
      "maxReferenceAudios": 1,
      "billByAudio": false,
      "audioRequestField": "generate_audio",
      "audioOutputField": "",
      "defaultAudio": true
    },
    {
      "downstream": "gpt-image-2-2K",
      "upstream": "gpt-image-2-2K",
      "resolution": "2K",
      "supportedResolutions": ["2K"],
      "videoAspectRatios": ["16:9","9:16","1:1","4:3","3:4","21:9"],
      "duration": false,
      "firstLastFrameMode": "off",
      "sendMode": "pixel",
      "suffixStyle": "axis",
      "defaultAspect": "omit",
      "objectType": "image",
      "mediaMaps": [{"kind":"images_all","from":"","to":"images","outputMode":"array"}],
      "imageMaps": [{"kind":"images_all","from":"","to":"images"}],
      "imageField": "images",
      "firstFrameField": "",
      "lastFrameField": "",
      "sendSize": true,
      "sendAspect": false,
      "sendImageSize": false,
      "aspectField": "",
      "imageSizeField": "",
      "videoSizeMap": {},
      "qualityMode": "off",
      "qualityValue": "medium",
      "sendQuality": false,
      "sendSeconds": false,
      "secondsUpstream": "off",
      "defaultSeconds": 0,
      "billBySeconds": false,
      "requestCountField": "request_count",
      "billByImageCount": false,
      "allowVideoUpload": false,
      "maxReferenceVideos": 1,
      "billByReferenceVideo": false,
      "billByInputVideoSeconds": false,
      "inputVideoReserveSeconds": 15,
      "inputVideoMaxSeconds": 15,
      "inputVideoSecondsPath": "usage.input_seconds",
      "audioField": "",
      "maxReferenceAudios": 1,
      "billByAudio": false,
      "audioRequestField": "generate_audio",
      "audioOutputField": "",
      "defaultAudio": true
    },
    {
      "downstream": "gpt-image-2-4K",
      "upstream": "gpt-image-2-4K",
      "resolution": "4K",
      "supportedResolutions": ["4K"],
      "videoAspectRatios": ["16:9","9:16","1:1","4:3","3:4","21:9"],
      "duration": false,
      "firstLastFrameMode": "off",
      "sendMode": "pixel",
      "suffixStyle": "axis",
      "defaultAspect": "omit",
      "objectType": "image",
      "mediaMaps": [{"kind":"images_all","from":"","to":"images","outputMode":"array"}],
      "imageMaps": [{"kind":"images_all","from":"","to":"images"}],
      "imageField": "images",
      "firstFrameField": "",
      "lastFrameField": "",
      "sendSize": true,
      "sendAspect": false,
      "sendImageSize": false,
      "aspectField": "",
      "imageSizeField": "",
      "videoSizeMap": {},
      "qualityMode": "off",
      "qualityValue": "medium",
      "sendQuality": false,
      "sendSeconds": false,
      "secondsUpstream": "off",
      "defaultSeconds": 0,
      "billBySeconds": false,
      "requestCountField": "request_count",
      "billByImageCount": false,
      "allowVideoUpload": false,
      "maxReferenceVideos": 1,
      "billByReferenceVideo": false,
      "billByInputVideoSeconds": false,
      "inputVideoReserveSeconds": 15,
      "inputVideoMaxSeconds": 15,
      "inputVideoSecondsPath": "usage.input_seconds",
      "audioField": "",
      "maxReferenceAudios": 1,
      "billByAudio": false,
      "audioRequestField": "generate_audio",
      "audioOutputField": "",
      "defaultAudio": true
    },
    {
      "downstream": "gpt-image-2.5",
      "upstream": "gpt-image-2.5",
      "resolution": "1K",
      "supportedResolutions": ["1K"],
      "videoAspectRatios": ["16:9","9:16","1:1","4:3","3:4","21:9"],
      "duration": false,
      "firstLastFrameMode": "off",
      "sendMode": "pixel",
      "suffixStyle": "axis",
      "defaultAspect": "omit",
      "objectType": "image",
      "mediaMaps": [{"kind":"images_all","from":"","to":"images","outputMode":"array"}],
      "imageMaps": [{"kind":"images_all","from":"","to":"images"}],
      "imageField": "images",
      "firstFrameField": "",
      "lastFrameField": "",
      "sendSize": true,
      "sendAspect": false,
      "sendImageSize": false,
      "aspectField": "",
      "imageSizeField": "",
      "videoSizeMap": {},
      "qualityMode": "off",
      "qualityValue": "medium",
      "sendQuality": false,
      "sendSeconds": false,
      "secondsUpstream": "off",
      "defaultSeconds": 0,
      "billBySeconds": false,
      "requestCountField": "request_count",
      "billByImageCount": false,
      "allowVideoUpload": false,
      "maxReferenceVideos": 1,
      "billByReferenceVideo": false,
      "billByInputVideoSeconds": false,
      "inputVideoReserveSeconds": 15,
      "inputVideoMaxSeconds": 15,
      "inputVideoSecondsPath": "usage.input_seconds",
      "audioField": "",
      "maxReferenceAudios": 1,
      "billByAudio": false,
      "audioRequestField": "generate_audio",
      "audioOutputField": "",
      "defaultAudio": true
    },
    {
      "downstream": "gpt-image-2.5-flare",
      "upstream": "gpt-image-2.5-flare",
      "resolution": "1K",
      "supportedResolutions": ["1K","2K","4K"],
      "videoAspectRatios": ["16:9","9:16","1:1","4:3","3:4","21:9"],
      "duration": false,
      "firstLastFrameMode": "off",
      "sendMode": "pixel",
      "suffixStyle": "axis",
      "defaultAspect": "omit",
      "objectType": "image",
      "mediaMaps": [{"kind":"images_all","from":"","to":"images","outputMode":"array"}],
      "imageMaps": [{"kind":"images_all","from":"","to":"images"}],
      "imageField": "images",
      "firstFrameField": "",
      "lastFrameField": "",
      "sendSize": true,
      "sendAspect": false,
      "sendImageSize": false,
      "aspectField": "",
      "imageSizeField": "",
      "videoSizeMap": {},
      "qualityMode": "off",
      "qualityValue": "medium",
      "sendQuality": false,
      "sendSeconds": false,
      "secondsUpstream": "off",
      "defaultSeconds": 0,
      "billBySeconds": false,
      "requestCountField": "request_count",
      "billByImageCount": false,
      "allowVideoUpload": false,
      "maxReferenceVideos": 1,
      "billByReferenceVideo": false,
      "billByInputVideoSeconds": false,
      "inputVideoReserveSeconds": 15,
      "inputVideoMaxSeconds": 15,
      "inputVideoSecondsPath": "usage.input_seconds",
      "audioField": "",
      "maxReferenceAudios": 1,
      "billByAudio": false,
      "audioRequestField": "generate_audio",
      "audioOutputField": "",
      "defaultAudio": true
    },
    {
      "downstream": "gpt-image-2.5-sunburst",
      "upstream": "gpt-image-2.5-sunburst",
      "resolution": "1K",
      "supportedResolutions": ["1K","2K","4K"],
      "videoAspectRatios": ["16:9","9:16","1:1","4:3","3:4","21:9"],
      "duration": false,
      "firstLastFrameMode": "off",
      "sendMode": "pixel",
      "suffixStyle": "axis",
      "defaultAspect": "omit",
      "objectType": "image",
      "mediaMaps": [{"kind":"images_all","from":"","to":"images","outputMode":"array"}],
      "imageMaps": [{"kind":"images_all","from":"","to":"images"}],
      "imageField": "images",
      "firstFrameField": "",
      "lastFrameField": "",
      "sendSize": true,
      "sendAspect": false,
      "sendImageSize": false,
      "aspectField": "",
      "imageSizeField": "",
      "videoSizeMap": {},
      "qualityMode": "off",
      "qualityValue": "medium",
      "sendQuality": false,
      "sendSeconds": false,
      "secondsUpstream": "off",
      "defaultSeconds": 0,
      "billBySeconds": false,
      "requestCountField": "request_count",
      "billByImageCount": false,
      "allowVideoUpload": false,
      "maxReferenceVideos": 1,
      "billByReferenceVideo": false,
      "billByInputVideoSeconds": false,
      "inputVideoReserveSeconds": 15,
      "inputVideoMaxSeconds": 15,
      "inputVideoSecondsPath": "usage.input_seconds",
      "audioField": "",
      "maxReferenceAudios": 1,
      "billByAudio": false,
      "audioRequestField": "generate_audio",
      "audioOutputField": "",
      "defaultAudio": true
    },
    {
      "downstream": "nano_banana_2",
      "upstream": "nano_banana_2",
      "resolution": "1K",
      "supportedResolutions": ["1K","2K","4K"],
      "videoAspectRatios": ["16:9","9:16","1:1","4:3","3:4","21:9"],
      "duration": false,
      "firstLastFrameMode": "off",
      "sendMode": "ratio_only",
      "suffixStyle": "axis",
      "defaultAspect": "omit",
      "objectType": "image",
      "mediaMaps": [{"kind":"images_all","from":"","to":"images","outputMode":"array"}],
      "imageMaps": [{"kind":"images_all","from":"","to":"images"}],
      "imageField": "images",
      "firstFrameField": "",
      "lastFrameField": "",
      "sendSize": false,
      "sendAspect": true,
      "sendImageSize": false,
      "aspectField": "",
      "imageSizeField": "",
      "videoSizeMap": {},
      "qualityMode": "off",
      "qualityValue": "medium",
      "sendQuality": false,
      "sendSeconds": false,
      "secondsUpstream": "off",
      "defaultSeconds": 0,
      "billBySeconds": false,
      "requestCountField": "request_count",
      "billByImageCount": false,
      "allowVideoUpload": false,
      "maxReferenceVideos": 1,
      "billByReferenceVideo": false,
      "billByInputVideoSeconds": false,
      "inputVideoReserveSeconds": 15,
      "inputVideoMaxSeconds": 15,
      "inputVideoSecondsPath": "usage.input_seconds",
      "audioField": "",
      "maxReferenceAudios": 1,
      "billByAudio": false,
      "audioRequestField": "generate_audio",
      "audioOutputField": "",
      "defaultAudio": true
    },
    {
      "downstream": "nano_banana_2-2K",
      "upstream": "nano_banana_2-2K",
      "resolution": "2K",
      "supportedResolutions": ["2K"],
      "videoAspectRatios": ["16:9","9:16","1:1","4:3","3:4","21:9"],
      "duration": false,
      "firstLastFrameMode": "off",
      "sendMode": "ratio_only",
      "suffixStyle": "axis",
      "defaultAspect": "omit",
      "objectType": "image",
      "mediaMaps": [{"kind":"images_all","from":"","to":"images","outputMode":"array"}],
      "imageMaps": [{"kind":"images_all","from":"","to":"images"}],
      "imageField": "images",
      "firstFrameField": "",
      "lastFrameField": "",
      "sendSize": false,
      "sendAspect": true,
      "sendImageSize": false,
      "aspectField": "",
      "imageSizeField": "",
      "videoSizeMap": {},
      "qualityMode": "off",
      "qualityValue": "medium",
      "sendQuality": false,
      "sendSeconds": false,
      "secondsUpstream": "off",
      "defaultSeconds": 0,
      "billBySeconds": false,
      "requestCountField": "request_count",
      "billByImageCount": false,
      "allowVideoUpload": false,
      "maxReferenceVideos": 1,
      "billByReferenceVideo": false,
      "billByInputVideoSeconds": false,
      "inputVideoReserveSeconds": 15,
      "inputVideoMaxSeconds": 15,
      "inputVideoSecondsPath": "usage.input_seconds",
      "audioField": "",
      "maxReferenceAudios": 1,
      "billByAudio": false,
      "audioRequestField": "generate_audio",
      "audioOutputField": "",
      "defaultAudio": true
    },
    {
      "downstream": "nano_banana_2-4K",
      "upstream": "nano_banana_2-4K",
      "resolution": "4K",
      "supportedResolutions": ["4K"],
      "videoAspectRatios": ["16:9","9:16","1:1","4:3","3:4","21:9"],
      "duration": false,
      "firstLastFrameMode": "off",
      "sendMode": "ratio_only",
      "suffixStyle": "axis",
      "defaultAspect": "omit",
      "objectType": "image",
      "mediaMaps": [{"kind":"images_all","from":"","to":"images","outputMode":"array"}],
      "imageMaps": [{"kind":"images_all","from":"","to":"images"}],
      "imageField": "images",
      "firstFrameField": "",
      "lastFrameField": "",
      "sendSize": false,
      "sendAspect": true,
      "sendImageSize": false,
      "aspectField": "",
      "imageSizeField": "",
      "videoSizeMap": {},
      "qualityMode": "off",
      "qualityValue": "medium",
      "sendQuality": false,
      "sendSeconds": false,
      "secondsUpstream": "off",
      "defaultSeconds": 0,
      "billBySeconds": false,
      "requestCountField": "request_count",
      "billByImageCount": false,
      "allowVideoUpload": false,
      "maxReferenceVideos": 1,
      "billByReferenceVideo": false,
      "billByInputVideoSeconds": false,
      "inputVideoReserveSeconds": 15,
      "inputVideoMaxSeconds": 15,
      "inputVideoSecondsPath": "usage.input_seconds",
      "audioField": "",
      "maxReferenceAudios": 1,
      "billByAudio": false,
      "audioRequestField": "generate_audio",
      "audioOutputField": "",
      "defaultAudio": true
    },
    {
      "downstream": "nano_banana_pro-1K",
      "upstream": "nano_banana_pro-1K",
      "resolution": "1K",
      "supportedResolutions": ["1K"],
      "videoAspectRatios": ["16:9","9:16","1:1","4:3","3:4","21:9"],
      "duration": false,
      "firstLastFrameMode": "off",
      "sendMode": "ratio_only",
      "suffixStyle": "axis",
      "defaultAspect": "omit",
      "objectType": "image",
      "mediaMaps": [{"kind":"images_all","from":"","to":"images","outputMode":"array"}],
      "imageMaps": [{"kind":"images_all","from":"","to":"images"}],
      "imageField": "images",
      "firstFrameField": "",
      "lastFrameField": "",
      "sendSize": false,
      "sendAspect": true,
      "sendImageSize": false,
      "aspectField": "",
      "imageSizeField": "",
      "videoSizeMap": {},
      "qualityMode": "off",
      "qualityValue": "medium",
      "sendQuality": false,
      "sendSeconds": false,
      "secondsUpstream": "off",
      "defaultSeconds": 0,
      "billBySeconds": false,
      "requestCountField": "request_count",
      "billByImageCount": false,
      "allowVideoUpload": false,
      "maxReferenceVideos": 1,
      "billByReferenceVideo": false,
      "billByInputVideoSeconds": false,
      "inputVideoReserveSeconds": 15,
      "inputVideoMaxSeconds": 15,
      "inputVideoSecondsPath": "usage.input_seconds",
      "audioField": "",
      "maxReferenceAudios": 1,
      "billByAudio": false,
      "audioRequestField": "generate_audio",
      "audioOutputField": "",
      "defaultAudio": true
    },
    {
      "downstream": "nano_banana_pro-2K",
      "upstream": "nano_banana_pro-2K",
      "resolution": "2K",
      "supportedResolutions": ["2K"],
      "videoAspectRatios": ["16:9","9:16","1:1","4:3","3:4","21:9"],
      "duration": false,
      "firstLastFrameMode": "off",
      "sendMode": "ratio_only",
      "suffixStyle": "axis",
      "defaultAspect": "omit",
      "objectType": "image",
      "mediaMaps": [{"kind":"images_all","from":"","to":"images","outputMode":"array"}],
      "imageMaps": [{"kind":"images_all","from":"","to":"images"}],
      "imageField": "images",
      "firstFrameField": "",
      "lastFrameField": "",
      "sendSize": false,
      "sendAspect": true,
      "sendImageSize": false,
      "aspectField": "",
      "imageSizeField": "",
      "videoSizeMap": {},
      "qualityMode": "off",
      "qualityValue": "medium",
      "sendQuality": false,
      "sendSeconds": false,
      "secondsUpstream": "off",
      "defaultSeconds": 0,
      "billBySeconds": false,
      "requestCountField": "request_count",
      "billByImageCount": false,
      "allowVideoUpload": false,
      "maxReferenceVideos": 1,
      "billByReferenceVideo": false,
      "billByInputVideoSeconds": false,
      "inputVideoReserveSeconds": 15,
      "inputVideoMaxSeconds": 15,
      "inputVideoSecondsPath": "usage.input_seconds",
      "audioField": "",
      "maxReferenceAudios": 1,
      "billByAudio": false,
      "audioRequestField": "generate_audio",
      "audioOutputField": "",
      "defaultAudio": true
    },
    {
      "downstream": "nano_banana_pro-4K",
      "upstream": "nano_banana_pro-4K",
      "resolution": "4K",
      "supportedResolutions": ["4K"],
      "videoAspectRatios": ["16:9","9:16","1:1","4:3","3:4","21:9"],
      "duration": false,
      "firstLastFrameMode": "off",
      "sendMode": "ratio_only",
      "suffixStyle": "axis",
      "defaultAspect": "omit",
      "objectType": "image",
      "mediaMaps": [{"kind":"images_all","from":"","to":"images","outputMode":"array"}],
      "imageMaps": [{"kind":"images_all","from":"","to":"images"}],
      "imageField": "images",
      "firstFrameField": "",
      "lastFrameField": "",
      "sendSize": false,
      "sendAspect": true,
      "sendImageSize": false,
      "aspectField": "",
      "imageSizeField": "",
      "videoSizeMap": {},
      "qualityMode": "off",
      "qualityValue": "medium",
      "sendQuality": false,
      "sendSeconds": false,
      "secondsUpstream": "off",
      "defaultSeconds": 0,
      "billBySeconds": false,
      "requestCountField": "request_count",
      "billByImageCount": false,
      "allowVideoUpload": false,
      "maxReferenceVideos": 1,
      "billByReferenceVideo": false,
      "billByInputVideoSeconds": false,
      "inputVideoReserveSeconds": 15,
      "inputVideoMaxSeconds": 15,
      "inputVideoSecondsPath": "usage.input_seconds",
      "audioField": "",
      "maxReferenceAudios": 1,
      "billByAudio": false,
      "audioRequestField": "generate_audio",
      "audioOutputField": "",
      "defaultAudio": true
    },
    {
      "downstream": "nano-banana-2.1",
      "upstream": "nano-banana-2.1",
      "resolution": "1K",
      "supportedResolutions": ["1K","2K","4K"],
      "videoAspectRatios": ["16:9","9:16","1:1","4:3","3:4","21:9"],
      "duration": false,
      "firstLastFrameMode": "off",
      "sendMode": "tier_plus_ratio",
      "suffixStyle": "axis",
      "defaultAspect": "omit",
      "objectType": "image",
      "mediaMaps": [{"kind":"images_all","from":"","to":"images","outputMode":"array"}],
      "imageMaps": [{"kind":"images_all","from":"","to":"images"}],
      "imageField": "images",
      "firstFrameField": "",
      "lastFrameField": "",
      "sendSize": false,
      "sendAspect": true,
      "sendImageSize": true,
      "aspectField": "",
      "imageSizeField": "",
      "videoSizeMap": {},
      "qualityMode": "off",
      "qualityValue": "medium",
      "sendQuality": false,
      "sendSeconds": false,
      "secondsUpstream": "off",
      "defaultSeconds": 0,
      "billBySeconds": false,
      "requestCountField": "request_count",
      "billByImageCount": false,
      "allowVideoUpload": false,
      "maxReferenceVideos": 1,
      "billByReferenceVideo": false,
      "billByInputVideoSeconds": false,
      "inputVideoReserveSeconds": 15,
      "inputVideoMaxSeconds": 15,
      "inputVideoSecondsPath": "usage.input_seconds",
      "audioField": "",
      "maxReferenceAudios": 1,
      "billByAudio": false,
      "audioRequestField": "generate_audio",
      "audioOutputField": "",
      "defaultAudio": true
    },
    {
      "downstream": "omni_flash-10s",
      "upstream": "omni_flash-10s",
      "resolution": "720p",
      "supportedResolutions": ["720p"],
      "videoAspectRatios": ["16:9","9:16"],
      "duration": false,
      "firstLastFrameMode": "off",
      "sendMode": "pixel",
      "suffixStyle": "axis",
      "defaultAspect": "omit",
      "objectType": "video",
      "mediaMaps": [{"kind":"images_all","from":"","to":"images","outputMode":"array"}],
      "imageMaps": [{"kind":"images_all","from":"","to":"images"}],
      "imageField": "images",
      "firstFrameField": "",
      "lastFrameField": "",
      "sendSize": true,
      "sendAspect": false,
      "sendImageSize": false,
      "aspectField": "",
      "imageSizeField": "",
      "videoSizeMap": {"480p":{"16:9":"854x480","9:16":"480x854"},"720p":{"16:9":"1280x720","9:16":"720x1280"},"768p":{"16:9":"1366x768","9:16":"768x1366"},"1080p":{"16:9":"1920x1080","9:16":"1080x1920"},"2K":{"16:9":"2560x1440","9:16":"1440x2560"},"4K":{"16:9":"3840x2160","9:16":"2160x3840"}},
      "qualityMode": "off",
      "qualityValue": "medium",
      "sendQuality": false,
      "sendSeconds": false,
      "secondsUpstream": "off",
      "defaultSeconds": 0,
      "billBySeconds": false,
      "requestCountField": "request_count",
      "billByImageCount": false,
      "allowVideoUpload": false,
      "maxReferenceVideos": 1,
      "billByReferenceVideo": false,
      "billByInputVideoSeconds": false,
      "inputVideoReserveSeconds": 15,
      "inputVideoMaxSeconds": 15,
      "inputVideoSecondsPath": "usage.input_seconds",
      "audioField": "",
      "maxReferenceAudios": 1,
      "billByAudio": false,
      "audioRequestField": "generate_audio",
      "audioOutputField": "",
      "defaultAudio": true
    },
    {
      "downstream": "omni_flash-10s-fl",
      "upstream": "omni_flash-10s-fl",
      "resolution": "720p",
      "supportedResolutions": ["720p"],
      "videoAspectRatios": ["16:9","9:16"],
      "duration": false,
      "firstLastFrameMode": "off",
      "sendMode": "pixel",
      "suffixStyle": "axis",
      "defaultAspect": "omit",
      "objectType": "video",
      "mediaMaps": [{"kind":"images_all","from":"","to":"images","outputMode":"array"}],
      "imageMaps": [{"kind":"images_all","from":"","to":"images"}],
      "imageField": "images",
      "firstFrameField": "",
      "lastFrameField": "",
      "sendSize": true,
      "sendAspect": false,
      "sendImageSize": false,
      "aspectField": "",
      "imageSizeField": "",
      "videoSizeMap": {"480p":{"16:9":"854x480","9:16":"480x854"},"720p":{"16:9":"1280x720","9:16":"720x1280"},"768p":{"16:9":"1366x768","9:16":"768x1366"},"1080p":{"16:9":"1920x1080","9:16":"1080x1920"},"2K":{"16:9":"2560x1440","9:16":"1440x2560"},"4K":{"16:9":"3840x2160","9:16":"2160x3840"}},
      "qualityMode": "off",
      "qualityValue": "medium",
      "sendQuality": false,
      "sendSeconds": false,
      "secondsUpstream": "off",
      "defaultSeconds": 0,
      "billBySeconds": false,
      "requestCountField": "request_count",
      "billByImageCount": false,
      "allowVideoUpload": false,
      "maxReferenceVideos": 1,
      "billByReferenceVideo": false,
      "billByInputVideoSeconds": false,
      "inputVideoReserveSeconds": 15,
      "inputVideoMaxSeconds": 15,
      "inputVideoSecondsPath": "usage.input_seconds",
      "audioField": "",
      "maxReferenceAudios": 1,
      "billByAudio": false,
      "audioRequestField": "generate_audio",
      "audioOutputField": "",
      "defaultAudio": true
    },
    {
      "downstream": "omni_flash-hd-10s",
      "upstream": "omni_flash-hd-10s",
      "resolution": "1080p",
      "supportedResolutions": ["1080p"],
      "videoAspectRatios": ["16:9","9:16"],
      "duration": false,
      "firstLastFrameMode": "off",
      "sendMode": "pixel",
      "suffixStyle": "axis",
      "defaultAspect": "omit",
      "objectType": "video",
      "mediaMaps": [{"kind":"images_all","from":"","to":"images","outputMode":"array"}],
      "imageMaps": [{"kind":"images_all","from":"","to":"images"}],
      "imageField": "images",
      "firstFrameField": "",
      "lastFrameField": "",
      "sendSize": true,
      "sendAspect": false,
      "sendImageSize": false,
      "aspectField": "",
      "imageSizeField": "",
      "videoSizeMap": {"480p":{"16:9":"854x480","9:16":"480x854"},"720p":{"16:9":"1280x720","9:16":"720x1280"},"768p":{"16:9":"1366x768","9:16":"768x1366"},"1080p":{"16:9":"1920x1080","9:16":"1080x1920"},"2K":{"16:9":"2560x1440","9:16":"1440x2560"},"4K":{"16:9":"3840x2160","9:16":"2160x3840"}},
      "qualityMode": "off",
      "qualityValue": "medium",
      "sendQuality": false,
      "sendSeconds": false,
      "secondsUpstream": "off",
      "defaultSeconds": 0,
      "billBySeconds": false,
      "requestCountField": "request_count",
      "billByImageCount": false,
      "allowVideoUpload": false,
      "maxReferenceVideos": 1,
      "billByReferenceVideo": false,
      "billByInputVideoSeconds": false,
      "inputVideoReserveSeconds": 15,
      "inputVideoMaxSeconds": 15,
      "inputVideoSecondsPath": "usage.input_seconds",
      "audioField": "",
      "maxReferenceAudios": 1,
      "billByAudio": false,
      "audioRequestField": "generate_audio",
      "audioOutputField": "",
      "defaultAudio": true
    },
    {
      "downstream": "omni_flash-hd-10s-fl",
      "upstream": "omni_flash-hd-10s-fl",
      "resolution": "1080p",
      "supportedResolutions": ["1080p"],
      "videoAspectRatios": ["16:9","9:16"],
      "duration": false,
      "firstLastFrameMode": "off",
      "sendMode": "pixel",
      "suffixStyle": "axis",
      "defaultAspect": "omit",
      "objectType": "video",
      "mediaMaps": [{"kind":"images_all","from":"","to":"images","outputMode":"array"}],
      "imageMaps": [{"kind":"images_all","from":"","to":"images"}],
      "imageField": "images",
      "firstFrameField": "",
      "lastFrameField": "",
      "sendSize": true,
      "sendAspect": false,
      "sendImageSize": false,
      "aspectField": "",
      "imageSizeField": "",
      "videoSizeMap": {"480p":{"16:9":"854x480","9:16":"480x854"},"720p":{"16:9":"1280x720","9:16":"720x1280"},"768p":{"16:9":"1366x768","9:16":"768x1366"},"1080p":{"16:9":"1920x1080","9:16":"1080x1920"},"2K":{"16:9":"2560x1440","9:16":"1440x2560"},"4K":{"16:9":"3840x2160","9:16":"2160x3840"}},
      "qualityMode": "off",
      "qualityValue": "medium",
      "sendQuality": false,
      "sendSeconds": false,
      "secondsUpstream": "off",
      "defaultSeconds": 0,
      "billBySeconds": false,
      "requestCountField": "request_count",
      "billByImageCount": false,
      "allowVideoUpload": false,
      "maxReferenceVideos": 1,
      "billByReferenceVideo": false,
      "billByInputVideoSeconds": false,
      "inputVideoReserveSeconds": 15,
      "inputVideoMaxSeconds": 15,
      "inputVideoSecondsPath": "usage.input_seconds",
      "audioField": "",
      "maxReferenceAudios": 1,
      "billByAudio": false,
      "audioRequestField": "generate_audio",
      "audioOutputField": "",
      "defaultAudio": true
    },
    {
      "downstream": "veo_3_1-lite",
      "upstream": "veo_3_1-lite",
      "resolution": "720p",
      "supportedResolutions": ["720p"],
      "videoAspectRatios": ["16:9","9:16"],
      "duration": false,
      "firstLastFrameMode": "off",
      "sendMode": "pixel",
      "suffixStyle": "axis",
      "defaultAspect": "omit",
      "objectType": "video",
      "mediaMaps": [{"kind":"images_all","from":"","to":"images","outputMode":"array"}],
      "imageMaps": [{"kind":"images_all","from":"","to":"images"}],
      "imageField": "images",
      "firstFrameField": "",
      "lastFrameField": "",
      "sendSize": true,
      "sendAspect": false,
      "sendImageSize": false,
      "aspectField": "",
      "imageSizeField": "",
      "videoSizeMap": {"480p":{"16:9":"854x480","9:16":"480x854"},"720p":{"16:9":"1280x720","9:16":"720x1280"},"768p":{"16:9":"1366x768","9:16":"768x1366"},"1080p":{"16:9":"1920x1080","9:16":"1080x1920"},"2K":{"16:9":"2560x1440","9:16":"1440x2560"},"4K":{"16:9":"3840x2160","9:16":"2160x3840"}},
      "qualityMode": "off",
      "qualityValue": "medium",
      "sendQuality": false,
      "sendSeconds": false,
      "secondsUpstream": "off",
      "defaultSeconds": 0,
      "billBySeconds": false,
      "requestCountField": "request_count",
      "billByImageCount": false,
      "allowVideoUpload": false,
      "maxReferenceVideos": 1,
      "billByReferenceVideo": false,
      "billByInputVideoSeconds": false,
      "inputVideoReserveSeconds": 15,
      "inputVideoMaxSeconds": 15,
      "inputVideoSecondsPath": "usage.input_seconds",
      "audioField": "",
      "maxReferenceAudios": 1,
      "billByAudio": false,
      "audioRequestField": "generate_audio",
      "audioOutputField": "",
      "defaultAudio": true
    },
    {
      "downstream": "veo_3_1-lite-fl",
      "upstream": "veo_3_1-lite-fl",
      "resolution": "720p",
      "supportedResolutions": ["720p"],
      "videoAspectRatios": ["16:9","9:16"],
      "duration": false,
      "firstLastFrameMode": "off",
      "sendMode": "pixel",
      "suffixStyle": "axis",
      "defaultAspect": "omit",
      "objectType": "video",
      "mediaMaps": [{"kind":"images_all","from":"","to":"images","outputMode":"array"}],
      "imageMaps": [{"kind":"images_all","from":"","to":"images"}],
      "imageField": "images",
      "firstFrameField": "",
      "lastFrameField": "",
      "sendSize": true,
      "sendAspect": false,
      "sendImageSize": false,
      "aspectField": "",
      "imageSizeField": "",
      "videoSizeMap": {"480p":{"16:9":"854x480","9:16":"480x854"},"720p":{"16:9":"1280x720","9:16":"720x1280"},"768p":{"16:9":"1366x768","9:16":"768x1366"},"1080p":{"16:9":"1920x1080","9:16":"1080x1920"},"2K":{"16:9":"2560x1440","9:16":"1440x2560"},"4K":{"16:9":"3840x2160","9:16":"2160x3840"}},
      "qualityMode": "off",
      "qualityValue": "medium",
      "sendQuality": false,
      "sendSeconds": false,
      "secondsUpstream": "off",
      "defaultSeconds": 0,
      "billBySeconds": false,
      "requestCountField": "request_count",
      "billByImageCount": false,
      "allowVideoUpload": false,
      "maxReferenceVideos": 1,
      "billByReferenceVideo": false,
      "billByInputVideoSeconds": false,
      "inputVideoReserveSeconds": 15,
      "inputVideoMaxSeconds": 15,
      "inputVideoSecondsPath": "usage.input_seconds",
      "audioField": "",
      "maxReferenceAudios": 1,
      "billByAudio": false,
      "audioRequestField": "generate_audio",
      "audioOutputField": "",
      "defaultAudio": true
    },
    {
      "downstream": "veo_3_1-lite-hd",
      "upstream": "veo_3_1-lite-hd",
      "resolution": "1080p",
      "supportedResolutions": ["1080p"],
      "videoAspectRatios": ["16:9","9:16"],
      "duration": false,
      "firstLastFrameMode": "off",
      "sendMode": "pixel",
      "suffixStyle": "axis",
      "defaultAspect": "omit",
      "objectType": "video",
      "mediaMaps": [{"kind":"images_all","from":"","to":"images","outputMode":"array"}],
      "imageMaps": [{"kind":"images_all","from":"","to":"images"}],
      "imageField": "images",
      "firstFrameField": "",
      "lastFrameField": "",
      "sendSize": true,
      "sendAspect": false,
      "sendImageSize": false,
      "aspectField": "",
      "imageSizeField": "",
      "videoSizeMap": {"480p":{"16:9":"854x480","9:16":"480x854"},"720p":{"16:9":"1280x720","9:16":"720x1280"},"768p":{"16:9":"1366x768","9:16":"768x1366"},"1080p":{"16:9":"1920x1080","9:16":"1080x1920"},"2K":{"16:9":"2560x1440","9:16":"1440x2560"},"4K":{"16:9":"3840x2160","9:16":"2160x3840"}},
      "qualityMode": "off",
      "qualityValue": "medium",
      "sendQuality": false,
      "sendSeconds": false,
      "secondsUpstream": "off",
      "defaultSeconds": 0,
      "billBySeconds": false,
      "requestCountField": "request_count",
      "billByImageCount": false,
      "allowVideoUpload": false,
      "maxReferenceVideos": 1,
      "billByReferenceVideo": false,
      "billByInputVideoSeconds": false,
      "inputVideoReserveSeconds": 15,
      "inputVideoMaxSeconds": 15,
      "inputVideoSecondsPath": "usage.input_seconds",
      "audioField": "",
      "maxReferenceAudios": 1,
      "billByAudio": false,
      "audioRequestField": "generate_audio",
      "audioOutputField": "",
      "defaultAudio": true
    },
    {
      "downstream": "veo_3_1-lite-hd-fl",
      "upstream": "veo_3_1-lite-hd-fl",
      "resolution": "1080p",
      "supportedResolutions": ["1080p"],
      "videoAspectRatios": ["16:9","9:16"],
      "duration": false,
      "firstLastFrameMode": "off",
      "sendMode": "pixel",
      "suffixStyle": "axis",
      "defaultAspect": "omit",
      "objectType": "video",
      "mediaMaps": [{"kind":"images_all","from":"","to":"images","outputMode":"array"}],
      "imageMaps": [{"kind":"images_all","from":"","to":"images"}],
      "imageField": "images",
      "firstFrameField": "",
      "lastFrameField": "",
      "sendSize": true,
      "sendAspect": false,
      "sendImageSize": false,
      "aspectField": "",
      "imageSizeField": "",
      "videoSizeMap": {"480p":{"16:9":"854x480","9:16":"480x854"},"720p":{"16:9":"1280x720","9:16":"720x1280"},"768p":{"16:9":"1366x768","9:16":"768x1366"},"1080p":{"16:9":"1920x1080","9:16":"1080x1920"},"2K":{"16:9":"2560x1440","9:16":"1440x2560"},"4K":{"16:9":"3840x2160","9:16":"2160x3840"}},
      "qualityMode": "off",
      "qualityValue": "medium",
      "sendQuality": false,
      "sendSeconds": false,
      "secondsUpstream": "off",
      "defaultSeconds": 0,
      "billBySeconds": false,
      "requestCountField": "request_count",
      "billByImageCount": false,
      "allowVideoUpload": false,
      "maxReferenceVideos": 1,
      "billByReferenceVideo": false,
      "billByInputVideoSeconds": false,
      "inputVideoReserveSeconds": 15,
      "inputVideoMaxSeconds": 15,
      "inputVideoSecondsPath": "usage.input_seconds",
      "audioField": "",
      "maxReferenceAudios": 1,
      "billByAudio": false,
      "audioRequestField": "generate_audio",
      "audioOutputField": "",
      "defaultAudio": true
    },
    {
      "downstream": "veo_3_1-fast",
      "upstream": "veo_3_1-fast",
      "resolution": "720p",
      "supportedResolutions": ["720p"],
      "videoAspectRatios": ["16:9","9:16"],
      "duration": false,
      "firstLastFrameMode": "off",
      "sendMode": "pixel",
      "suffixStyle": "axis",
      "defaultAspect": "omit",
      "objectType": "video",
      "mediaMaps": [{"kind":"images_all","from":"","to":"images","outputMode":"array"}],
      "imageMaps": [{"kind":"images_all","from":"","to":"images"}],
      "imageField": "images",
      "firstFrameField": "",
      "lastFrameField": "",
      "sendSize": true,
      "sendAspect": false,
      "sendImageSize": false,
      "aspectField": "",
      "imageSizeField": "",
      "videoSizeMap": {"480p":{"16:9":"854x480","9:16":"480x854"},"720p":{"16:9":"1280x720","9:16":"720x1280"},"768p":{"16:9":"1366x768","9:16":"768x1366"},"1080p":{"16:9":"1920x1080","9:16":"1080x1920"},"2K":{"16:9":"2560x1440","9:16":"1440x2560"},"4K":{"16:9":"3840x2160","9:16":"2160x3840"}},
      "qualityMode": "off",
      "qualityValue": "medium",
      "sendQuality": false,
      "sendSeconds": false,
      "secondsUpstream": "off",
      "defaultSeconds": 0,
      "billBySeconds": false,
      "requestCountField": "request_count",
      "billByImageCount": false,
      "allowVideoUpload": false,
      "maxReferenceVideos": 1,
      "billByReferenceVideo": false,
      "billByInputVideoSeconds": false,
      "inputVideoReserveSeconds": 15,
      "inputVideoMaxSeconds": 15,
      "inputVideoSecondsPath": "usage.input_seconds",
      "audioField": "",
      "maxReferenceAudios": 1,
      "billByAudio": false,
      "audioRequestField": "generate_audio",
      "audioOutputField": "",
      "defaultAudio": true
    },
    {
      "downstream": "veo_3_1-fast-fl",
      "upstream": "veo_3_1-fast-fl",
      "resolution": "720p",
      "supportedResolutions": ["720p"],
      "videoAspectRatios": ["16:9","9:16"],
      "duration": false,
      "firstLastFrameMode": "off",
      "sendMode": "pixel",
      "suffixStyle": "axis",
      "defaultAspect": "omit",
      "objectType": "video",
      "mediaMaps": [{"kind":"images_all","from":"","to":"images","outputMode":"array"}],
      "imageMaps": [{"kind":"images_all","from":"","to":"images"}],
      "imageField": "images",
      "firstFrameField": "",
      "lastFrameField": "",
      "sendSize": true,
      "sendAspect": false,
      "sendImageSize": false,
      "aspectField": "",
      "imageSizeField": "",
      "videoSizeMap": {"480p":{"16:9":"854x480","9:16":"480x854"},"720p":{"16:9":"1280x720","9:16":"720x1280"},"768p":{"16:9":"1366x768","9:16":"768x1366"},"1080p":{"16:9":"1920x1080","9:16":"1080x1920"},"2K":{"16:9":"2560x1440","9:16":"1440x2560"},"4K":{"16:9":"3840x2160","9:16":"2160x3840"}},
      "qualityMode": "off",
      "qualityValue": "medium",
      "sendQuality": false,
      "sendSeconds": false,
      "secondsUpstream": "off",
      "defaultSeconds": 0,
      "billBySeconds": false,
      "requestCountField": "request_count",
      "billByImageCount": false,
      "allowVideoUpload": false,
      "maxReferenceVideos": 1,
      "billByReferenceVideo": false,
      "billByInputVideoSeconds": false,
      "inputVideoReserveSeconds": 15,
      "inputVideoMaxSeconds": 15,
      "inputVideoSecondsPath": "usage.input_seconds",
      "audioField": "",
      "maxReferenceAudios": 1,
      "billByAudio": false,
      "audioRequestField": "generate_audio",
      "audioOutputField": "",
      "defaultAudio": true
    },
    {
      "downstream": "grok-imagine-video-1.5",
      "upstream": "grok-imagine-video-1.5",
      "resolution": "720p",
      "supportedResolutions": ["480p","720p","768p","1080p","2K","4K"],
      "videoAspectRatios": ["16:9","9:16","1:1","4:3","3:4"],
      "duration": false,
      "firstLastFrameMode": "off",
      "sendMode": "tier_plus_ratio",
      "suffixStyle": "axis",
      "defaultAspect": "omit",
      "objectType": "video",
      "mediaMaps": [{"kind":"images_all","from":"","to":"images","outputMode":"array"},{"kind":"videos_all","from":"","to":"videos","outputMode":"array"},{"kind":"audios_all","from":"","to":"audios","outputMode":"array"}],
      "imageMaps": [{"kind":"images_all","from":"","to":"images"}],
      "imageField": "images",
      "firstFrameField": "",
      "lastFrameField": "",
      "sendSize": false,
      "sendAspect": true,
      "sendImageSize": true,
      "aspectField": "",
      "imageSizeField": "resolution",
      "videoSizeMap": {"480p":{"16:9":"854x480","9:16":"480x854"},"720p":{"16:9":"1280x720","9:16":"720x1280"},"768p":{"16:9":"1366x768","9:16":"768x1366"},"1080p":{"16:9":"1920x1080","9:16":"1080x1920"},"2K":{"16:9":"2560x1440","9:16":"1440x2560"},"4K":{"16:9":"3840x2160","9:16":"2160x3840"}},
      "qualityMode": "off",
      "qualityValue": "medium",
      "sendQuality": false,
      "sendSeconds": false,
      "secondsUpstream": "off",
      "defaultSeconds": 0,
      "billBySeconds": false,
      "requestCountField": "request_count",
      "billByImageCount": false,
      "allowVideoUpload": false,
      "maxReferenceVideos": 1,
      "billByReferenceVideo": false,
      "billByInputVideoSeconds": false,
      "inputVideoReserveSeconds": 15,
      "inputVideoMaxSeconds": 15,
      "inputVideoSecondsPath": "usage.input_seconds",
      "audioField": "",
      "maxReferenceAudios": 1,
      "billByAudio": false,
      "audioRequestField": "generate_audio",
      "audioOutputField": "",
      "defaultAudio": true
    },
    {
      "downstream": "grok-imagine-video-1.5-lite",
      "upstream": "grok-imagine-video-1.5-lite",
      "resolution": "720p",
      "supportedResolutions": ["480p","720p","768p","1080p","2K","4K"],
      "videoAspectRatios": ["16:9","9:16","1:1","4:3","3:4"],
      "duration": false,
      "firstLastFrameMode": "off",
      "sendMode": "tier_plus_ratio",
      "suffixStyle": "axis",
      "defaultAspect": "omit",
      "objectType": "video",
      "mediaMaps": [{"kind":"images_all","from":"","to":"images","outputMode":"array"},{"kind":"videos_all","from":"","to":"videos","outputMode":"array"},{"kind":"audios_all","from":"","to":"audios","outputMode":"array"}],
      "imageMaps": [{"kind":"images_all","from":"","to":"images"}],
      "imageField": "images",
      "firstFrameField": "",
      "lastFrameField": "",
      "sendSize": false,
      "sendAspect": true,
      "sendImageSize": true,
      "aspectField": "",
      "imageSizeField": "resolution",
      "videoSizeMap": {"480p":{"16:9":"854x480","9:16":"480x854"},"720p":{"16:9":"1280x720","9:16":"720x1280"},"768p":{"16:9":"1366x768","9:16":"768x1366"},"1080p":{"16:9":"1920x1080","9:16":"1080x1920"},"2K":{"16:9":"2560x1440","9:16":"1440x2560"},"4K":{"16:9":"3840x2160","9:16":"2160x3840"}},
      "qualityMode": "off",
      "qualityValue": "medium",
      "sendQuality": false,
      "sendSeconds": false,
      "secondsUpstream": "off",
      "defaultSeconds": 0,
      "billBySeconds": false,
      "requestCountField": "request_count",
      "billByImageCount": false,
      "allowVideoUpload": false,
      "maxReferenceVideos": 1,
      "billByReferenceVideo": false,
      "billByInputVideoSeconds": false,
      "inputVideoReserveSeconds": 15,
      "inputVideoMaxSeconds": 15,
      "inputVideoSecondsPath": "usage.input_seconds",
      "audioField": "",
      "maxReferenceAudios": 1,
      "billByAudio": false,
      "audioRequestField": "generate_audio",
      "audioOutputField": "",
      "defaultAudio": true
    },
    {
      "downstream": "grok-imagine-video-1.5-fast",
      "upstream": "grok-imagine-video-1.5-fast",
      "resolution": "720p",
      "supportedResolutions": ["480p","720p","768p","1080p","2K","4K"],
      "videoAspectRatios": ["16:9","9:16","1:1","4:3","3:4"],
      "duration": false,
      "firstLastFrameMode": "off",
      "sendMode": "tier_plus_ratio",
      "suffixStyle": "axis",
      "defaultAspect": "omit",
      "objectType": "video",
      "mediaMaps": [{"kind":"images_all","from":"","to":"images","outputMode":"array"},{"kind":"videos_all","from":"","to":"videos","outputMode":"array"},{"kind":"audios_all","from":"","to":"audios","outputMode":"array"}],
      "imageMaps": [{"kind":"images_all","from":"","to":"images"}],
      "imageField": "images",
      "firstFrameField": "",
      "lastFrameField": "",
      "sendSize": false,
      "sendAspect": true,
      "sendImageSize": true,
      "aspectField": "",
      "imageSizeField": "resolution",
      "videoSizeMap": {"480p":{"16:9":"854x480","9:16":"480x854"},"720p":{"16:9":"1280x720","9:16":"720x1280"},"768p":{"16:9":"1366x768","9:16":"768x1366"},"1080p":{"16:9":"1920x1080","9:16":"1080x1920"},"2K":{"16:9":"2560x1440","9:16":"1440x2560"},"4K":{"16:9":"3840x2160","9:16":"2160x3840"}},
      "qualityMode": "off",
      "qualityValue": "medium",
      "sendQuality": false,
      "sendSeconds": false,
      "secondsUpstream": "off",
      "defaultSeconds": 0,
      "billBySeconds": false,
      "requestCountField": "request_count",
      "billByImageCount": false,
      "allowVideoUpload": false,
      "maxReferenceVideos": 1,
      "billByReferenceVideo": false,
      "billByInputVideoSeconds": false,
      "inputVideoReserveSeconds": 15,
      "inputVideoMaxSeconds": 15,
      "inputVideoSecondsPath": "usage.input_seconds",
      "audioField": "",
      "maxReferenceAudios": 1,
      "billByAudio": false,
      "audioRequestField": "generate_audio",
      "audioOutputField": "",
      "defaultAudio": true
    },
    {
      "downstream": "seedance-2.0",
      "upstream": "seedance-2.0",
      "resolution": "720p",
      "supportedResolutions": ["480p","720p","768p","1080p","2K","4K"],
      "videoAspectRatios": ["16:9","9:16"],
      "duration": false,
      "firstLastFrameMode": "off",
      "sendMode": "tier_plus_ratio",
      "suffixStyle": "axis",
      "defaultAspect": "omit",
      "objectType": "video",
      "mediaMaps": [{"kind":"images_all","from":"","to":"images","outputMode":"array"},{"kind":"videos_all","from":"","to":"videos","outputMode":"array"},{"kind":"audios_all","from":"","to":"audios","outputMode":"array"}],
      "imageMaps": [{"kind":"images_all","from":"","to":"images"}],
      "imageField": "images",
      "firstFrameField": "",
      "lastFrameField": "",
      "sendSize": false,
      "sendAspect": true,
      "sendImageSize": true,
      "aspectField": "",
      "imageSizeField": "resolution",
      "videoSizeMap": {"480p":{"16:9":"854x480","9:16":"480x854"},"720p":{"16:9":"1280x720","9:16":"720x1280"},"768p":{"16:9":"1366x768","9:16":"768x1366"},"1080p":{"16:9":"1920x1080","9:16":"1080x1920"},"2K":{"16:9":"2560x1440","9:16":"1440x2560"},"4K":{"16:9":"3840x2160","9:16":"2160x3840"}},
      "qualityMode": "off",
      "qualityValue": "medium",
      "sendQuality": false,
      "sendSeconds": false,
      "secondsUpstream": "off",
      "defaultSeconds": 0,
      "billBySeconds": false,
      "requestCountField": "request_count",
      "billByImageCount": false,
      "allowVideoUpload": false,
      "maxReferenceVideos": 1,
      "billByReferenceVideo": false,
      "billByInputVideoSeconds": false,
      "inputVideoReserveSeconds": 15,
      "inputVideoMaxSeconds": 15,
      "inputVideoSecondsPath": "usage.input_seconds",
      "audioField": "",
      "maxReferenceAudios": 1,
      "billByAudio": false,
      "audioRequestField": "generate_audio",
      "audioOutputField": "",
      "defaultAudio": true
    },
    {
      "downstream": "seedance-2.5-10s",
      "upstream": "seedance-2.5-10s",
      "resolution": "480p",
      "supportedResolutions": ["480p","720p","768p","1080p","2K","4K"],
      "videoAspectRatios": ["16:9","9:16","1:1","4:3","3:4"],
      "duration": false,
      "firstLastFrameMode": "off",
      "sendMode": "tier_plus_ratio",
      "suffixStyle": "axis",
      "defaultAspect": "omit",
      "objectType": "video",
      "mediaMaps": [{"kind":"images_all","from":"","to":"images","outputMode":"array"},{"kind":"videos_all","from":"","to":"videos","outputMode":"array"},{"kind":"audios_all","from":"","to":"audios","outputMode":"array"}],
      "imageMaps": [{"kind":"images_all","from":"","to":"images"}],
      "imageField": "images",
      "firstFrameField": "",
      "lastFrameField": "",
      "sendSize": false,
      "sendAspect": true,
      "sendImageSize": true,
      "aspectField": "",
      "imageSizeField": "resolution",
      "videoSizeMap": {"480p":{"16:9":"854x480","9:16":"480x854"},"720p":{"16:9":"1280x720","9:16":"720x1280"},"768p":{"16:9":"1366x768","9:16":"768x1366"},"1080p":{"16:9":"1920x1080","9:16":"1080x1920"},"2K":{"16:9":"2560x1440","9:16":"1440x2560"},"4K":{"16:9":"3840x2160","9:16":"2160x3840"}},
      "qualityMode": "off",
      "qualityValue": "medium",
      "sendQuality": false,
      "sendSeconds": false,
      "secondsUpstream": "off",
      "defaultSeconds": 0,
      "billBySeconds": false,
      "requestCountField": "request_count",
      "billByImageCount": false,
      "allowVideoUpload": false,
      "maxReferenceVideos": 1,
      "billByReferenceVideo": false,
      "billByInputVideoSeconds": false,
      "inputVideoReserveSeconds": 15,
      "inputVideoMaxSeconds": 15,
      "inputVideoSecondsPath": "usage.input_seconds",
      "audioField": "",
      "maxReferenceAudios": 1,
      "billByAudio": false,
      "audioRequestField": "generate_audio",
      "audioOutputField": "",
      "defaultAudio": true
    },
    {
      "downstream": "seedance-2.5-15s",
      "upstream": "seedance-2.5-15s",
      "resolution": "480p",
      "supportedResolutions": ["480p","720p","768p","1080p","2K","4K"],
      "videoAspectRatios": ["16:9","9:16","1:1","4:3","3:4"],
      "duration": false,
      "firstLastFrameMode": "off",
      "sendMode": "tier_plus_ratio",
      "suffixStyle": "axis",
      "defaultAspect": "omit",
      "objectType": "video",
      "mediaMaps": [{"kind":"images_all","from":"","to":"images","outputMode":"array"},{"kind":"videos_all","from":"","to":"videos","outputMode":"array"},{"kind":"audios_all","from":"","to":"audios","outputMode":"array"}],
      "imageMaps": [{"kind":"images_all","from":"","to":"images"}],
      "imageField": "images",
      "firstFrameField": "",
      "lastFrameField": "",
      "sendSize": false,
      "sendAspect": true,
      "sendImageSize": true,
      "aspectField": "",
      "imageSizeField": "resolution",
      "videoSizeMap": {"480p":{"16:9":"854x480","9:16":"480x854"},"720p":{"16:9":"1280x720","9:16":"720x1280"},"768p":{"16:9":"1366x768","9:16":"768x1366"},"1080p":{"16:9":"1920x1080","9:16":"1080x1920"},"2K":{"16:9":"2560x1440","9:16":"1440x2560"},"4K":{"16:9":"3840x2160","9:16":"2160x3840"}},
      "qualityMode": "off",
      "qualityValue": "medium",
      "sendQuality": false,
      "sendSeconds": false,
      "secondsUpstream": "off",
      "defaultSeconds": 0,
      "billBySeconds": false,
      "requestCountField": "request_count",
      "billByImageCount": false,
      "allowVideoUpload": false,
      "maxReferenceVideos": 1,
      "billByReferenceVideo": false,
      "billByInputVideoSeconds": false,
      "inputVideoReserveSeconds": 15,
      "inputVideoMaxSeconds": 15,
      "inputVideoSecondsPath": "usage.input_seconds",
      "audioField": "",
      "maxReferenceAudios": 1,
      "billByAudio": false,
      "audioRequestField": "generate_audio",
      "audioOutputField": "",
      "defaultAudio": true
    },
    {
      "downstream": "seedance-2.5-30s",
      "upstream": "seedance-2.5-30s",
      "resolution": "480p",
      "supportedResolutions": ["480p","720p","768p","1080p","2K","4K"],
      "videoAspectRatios": ["16:9","9:16","1:1","4:3","3:4"],
      "duration": false,
      "firstLastFrameMode": "off",
      "sendMode": "tier_plus_ratio",
      "suffixStyle": "axis",
      "defaultAspect": "omit",
      "objectType": "video",
      "mediaMaps": [{"kind":"images_all","from":"","to":"images","outputMode":"array"},{"kind":"videos_all","from":"","to":"videos","outputMode":"array"},{"kind":"audios_all","from":"","to":"audios","outputMode":"array"}],
      "imageMaps": [{"kind":"images_all","from":"","to":"images"}],
      "imageField": "images",
      "firstFrameField": "",
      "lastFrameField": "",
      "sendSize": false,
      "sendAspect": true,
      "sendImageSize": true,
      "aspectField": "",
      "imageSizeField": "resolution",
      "videoSizeMap": {"480p":{"16:9":"854x480","9:16":"480x854"},"720p":{"16:9":"1280x720","9:16":"720x1280"},"768p":{"16:9":"1366x768","9:16":"768x1366"},"1080p":{"16:9":"1920x1080","9:16":"1080x1920"},"2K":{"16:9":"2560x1440","9:16":"1440x2560"},"4K":{"16:9":"3840x2160","9:16":"2160x3840"}},
      "qualityMode": "off",
      "qualityValue": "medium",
      "sendQuality": false,
      "sendSeconds": false,
      "secondsUpstream": "off",
      "defaultSeconds": 0,
      "billBySeconds": false,
      "requestCountField": "request_count",
      "billByImageCount": false,
      "allowVideoUpload": false,
      "maxReferenceVideos": 1,
      "billByReferenceVideo": false,
      "billByInputVideoSeconds": false,
      "inputVideoReserveSeconds": 15,
      "inputVideoMaxSeconds": 15,
      "inputVideoSecondsPath": "usage.input_seconds",
      "audioField": "",
      "maxReferenceAudios": 1,
      "billByAudio": false,
      "audioRequestField": "generate_audio",
      "audioOutputField": "",
      "defaultAudio": true
    },
    {
      "downstream": "seedance-2.0-mini",
      "upstream": "seedance-2.0-mini",
      "resolution": "480p",
      "supportedResolutions": ["480p","720p","768p","1080p","2K","4K"],
      "videoAspectRatios": ["16:9","9:16"],
      "duration": false,
      "firstLastFrameMode": "off",
      "sendMode": "tier_plus_ratio",
      "suffixStyle": "axis",
      "defaultAspect": "omit",
      "objectType": "video",
      "mediaMaps": [{"kind":"images_all","from":"","to":"images","outputMode":"array"},{"kind":"videos_all","from":"","to":"videos","outputMode":"array"},{"kind":"audios_all","from":"","to":"audios","outputMode":"array"}],
      "imageMaps": [{"kind":"images_all","from":"","to":"images"}],
      "imageField": "images",
      "firstFrameField": "",
      "lastFrameField": "",
      "sendSize": false,
      "sendAspect": true,
      "sendImageSize": true,
      "aspectField": "",
      "imageSizeField": "resolution",
      "videoSizeMap": {"480p":{"16:9":"854x480","9:16":"480x854"},"720p":{"16:9":"1280x720","9:16":"720x1280"},"768p":{"16:9":"1366x768","9:16":"768x1366"},"1080p":{"16:9":"1920x1080","9:16":"1080x1920"},"2K":{"16:9":"2560x1440","9:16":"1440x2560"},"4K":{"16:9":"3840x2160","9:16":"2160x3840"}},
      "qualityMode": "off",
      "qualityValue": "medium",
      "sendQuality": false,
      "sendSeconds": false,
      "secondsUpstream": "off",
      "defaultSeconds": 0,
      "billBySeconds": false,
      "requestCountField": "request_count",
      "billByImageCount": false,
      "allowVideoUpload": false,
      "maxReferenceVideos": 1,
      "billByReferenceVideo": false,
      "billByInputVideoSeconds": false,
      "inputVideoReserveSeconds": 15,
      "inputVideoMaxSeconds": 15,
      "inputVideoSecondsPath": "usage.input_seconds",
      "audioField": "",
      "maxReferenceAudios": 1,
      "billByAudio": false,
      "audioRequestField": "generate_audio",
      "audioOutputField": "",
      "defaultAudio": true
    },
    {
      "downstream": "minimax-h3-max",
      "upstream": "minimax-h3-max",
      "resolution": "480p",
      "supportedResolutions": ["480p","720p","768p","1080p","2K","4K"],
      "videoAspectRatios": ["16:9","9:16","1:1","4:3","3:4"],
      "duration": false,
      "firstLastFrameMode": "off",
      "sendMode": "tier_plus_ratio",
      "suffixStyle": "axis",
      "defaultAspect": "omit",
      "objectType": "video",
      "mediaMaps": [{"kind":"images_all","from":"","to":"images","outputMode":"array"},{"kind":"videos_all","from":"","to":"videos","outputMode":"array"},{"kind":"audios_all","from":"","to":"audios","outputMode":"array"}],
      "imageMaps": [{"kind":"images_all","from":"","to":"images"}],
      "imageField": "images",
      "firstFrameField": "",
      "lastFrameField": "",
      "sendSize": false,
      "sendAspect": true,
      "sendImageSize": true,
      "aspectField": "",
      "imageSizeField": "resolution",
      "videoSizeMap": {"480p":{"16:9":"854x480","9:16":"480x854"},"720p":{"16:9":"1280x720","9:16":"720x1280"},"768p":{"16:9":"1366x768","9:16":"768x1366"},"1080p":{"16:9":"1920x1080","9:16":"1080x1920"},"2K":{"16:9":"2560x1440","9:16":"1440x2560"},"4K":{"16:9":"3840x2160","9:16":"2160x3840"}},
      "qualityMode": "off",
      "qualityValue": "medium",
      "sendQuality": false,
      "sendSeconds": false,
      "secondsUpstream": "off",
      "defaultSeconds": 0,
      "billBySeconds": true,
      "requestCountField": "request_count",
      "billByImageCount": false,
      "allowVideoUpload": false,
      "maxReferenceVideos": 1,
      "billByReferenceVideo": false,
      "billByInputVideoSeconds": false,
      "inputVideoReserveSeconds": 15,
      "inputVideoMaxSeconds": 15,
      "inputVideoSecondsPath": "usage.input_seconds",
      "audioField": "",
      "maxReferenceAudios": 1,
      "billByAudio": false,
      "audioRequestField": "generate_audio",
      "audioOutputField": "",
      "defaultAudio": true
    },
    {
      "downstream": "minimax-h3",
      "upstream": "minimax-h3",
      "resolution": "480p",
      "supportedResolutions": ["480p","720p","768p","1080p","2K","4K"],
      "videoAspectRatios": ["16:9","9:16","1:1","4:3","3:4"],
      "duration": false,
      "firstLastFrameMode": "off",
      "sendMode": "tier_plus_ratio",
      "suffixStyle": "axis",
      "defaultAspect": "omit",
      "objectType": "video",
      "mediaMaps": [{"kind":"images_all","from":"","to":"images","outputMode":"array"},{"kind":"videos_all","from":"","to":"videos","outputMode":"array"},{"kind":"audios_all","from":"","to":"audios","outputMode":"array"}],
      "imageMaps": [{"kind":"images_all","from":"","to":"images"}],
      "imageField": "images",
      "firstFrameField": "",
      "lastFrameField": "",
      "sendSize": false,
      "sendAspect": true,
      "sendImageSize": true,
      "aspectField": "",
      "imageSizeField": "resolution",
      "videoSizeMap": {"480p":{"16:9":"854x480","9:16":"480x854"},"720p":{"16:9":"1280x720","9:16":"720x1280"},"768p":{"16:9":"1366x768","9:16":"768x1366"},"1080p":{"16:9":"1920x1080","9:16":"1080x1920"},"2K":{"16:9":"2560x1440","9:16":"1440x2560"},"4K":{"16:9":"3840x2160","9:16":"2160x3840"}},
      "qualityMode": "off",
      "qualityValue": "medium",
      "sendQuality": false,
      "sendSeconds": false,
      "secondsUpstream": "off",
      "defaultSeconds": 0,
      "billBySeconds": true,
      "requestCountField": "request_count",
      "billByImageCount": false,
      "allowVideoUpload": false,
      "maxReferenceVideos": 1,
      "billByReferenceVideo": false,
      "billByInputVideoSeconds": false,
      "inputVideoReserveSeconds": 15,
      "inputVideoMaxSeconds": 15,
      "inputVideoSecondsPath": "usage.input_seconds",
      "audioField": "",
      "maxReferenceAudios": 1,
      "billByAudio": false,
      "audioRequestField": "generate_audio",
      "audioOutputField": "",
      "defaultAudio": true
    }
  ]
};

function trimmed(v) {
  return String(v == null ? "" : v).trim();
}
function getPath(obj, path) {
  if (!path) return undefined;
  const parts = String(path).replace(/\[(\d+)\]/g, ".$1").split(".").filter(Boolean);
  let cur = obj;
  for (let i = 0; i < parts.length; i++) {
    if (cur == null) return undefined;
    cur = cur[parts[i]];
  }
  return cur;
}
function normalizeRatio(ratio) {
  if (typeof ratio !== "string") return null;
  const v = ratio.trim().toLowerCase();
  if (v === "auto") return "auto";
  const m = v.match(/^(\d+)\s*[:：/xX*×]\s*(\d+)$/);
  return m ? m[1] + ":" + m[2] : null;
}
function aspectFromSize(size) {
  if (typeof size !== "string") return null;
  const normalized = size.trim().replace(/\s/g, "").toLowerCase();
  const keys = Object.keys(RATIO_MAP);
  for (let i = 0; i < keys.length; i++) {
    const sizes = RATIO_MAP[keys[i]];
    if (String(sizes["1K"]).toLowerCase() === normalized) return keys[i];
    if (String(sizes["2K"]).toLowerCase() === normalized) return keys[i];
    if (String(sizes["4K"]).toLowerCase() === normalized) return keys[i];
  }
  const m = normalized.match(/^(\d+)[x×*](\d+)$/i);
  if (!m) return null;
  const w = parseInt(m[1], 10);
  const h = parseInt(m[2], 10);
  if (w > h) return "16:9";
  if (h > w) return "9:16";
  return "1:1";
}
function collectImages(body, accept, limit) {
  accept = accept || PROFILE.refAccept || [];
  const out = [];
  function push(v) {
    if (Array.isArray(v)) {
      for (let i = 0; i < v.length; i++) push(v[i]);
      return;
    }
    if (typeof v === "string" && trimmed(v)) out.push(trimmed(v));
    else if (v && typeof v === "object") {
      const u = v.url || (v.image_url && (v.image_url.url || v.image_url));
      if (trimmed(u)) out.push(trimmed(u));
    }
  }
  function fieldValue(field) {
    if (!body) return undefined;
    const path = String(field || "").replace(/\[\]$/, "");
    return getPath(body, path);
  }
  for (let i = 0; i < accept.length; i++) push(fieldValue(accept[i]));
  const unique = [];
  for (let i = 0; i < out.length; i++) {
    if (unique.indexOf(out[i]) < 0) unique.push(out[i]);
  }
  const configuredLimit = Math.floor(Number(limit));
  if (isFinite(configuredLimit) && configuredLimit > 0) {
    return unique.slice(0, Math.min(configuredLimit, 32));
  }
  return unique;
}
function normalizeTier(t) {
  if (t == null || t === "") return null;
  const s = String(t).trim().toUpperCase();
  if (s === "HD" || s === "1080P") return "1080P";
  if (s === "480P" || s === "720P" || s === "768P" || s === "2K" || s === "4K") return s;
  return s;
}
function findModel(name, body) {
  const key = trimmed(name);
  const rows = PROFILE.models || [];
  const matched = [];
  for (let i = 0; i < rows.length; i++) {
    if (rows[i].downstream === key || String(rows[i].downstream).toLowerCase() === key.toLowerCase()) matched.push(rows[i]);
  }
  if (!matched.length) {
    const withoutFrame = String(key || "").replace(/-fl(?=-|$)/i, "");
    if (withoutFrame && withoutFrame !== key) return findModel(withoutFrame, body);
    const base = String(key || "").match(/^(.+)[-_](480p|720p|768p|1080p|hd|4k|1k|2k)$/i);
    if (base && base[1] && base[1] !== key) return findModel(base[1], body);
    const withoutSeconds = String(key || "").replace(/-(\d+)s(?=-|$)/i, "");
    if (withoutSeconds && withoutSeconds !== key) return findModel(withoutSeconds, body);
    return null;
  }
  if (matched.length === 1) return matched[0];
  const tier = normalizeTier(parseTier(body, matched[0]));
  for (let i = 0; i < matched.length; i++) if (normalizeTier(matched[i].resolution) === tier) return matched[i];
  for (let i = 0; i < matched.length; i++) {
    const r = normalizeTier(matched[i].resolution);
    if (!r || r === "1K") return matched[i];
  }
  return matched[0];
}
function billingKind(row) {
  if (row && row.objectType === "video") return "video";
  if (row && row.objectType === "image") return "image";
  return PROFILE.objectType === "video" ? "video" : "image";
}
function canonicalBillingTier(raw, kind) {
  const upper = String(raw || "").trim().toUpperCase();
  if (!upper) return "";
  if (kind === "video") {
    if (upper === "480P") return "480p";
    if (upper === "720P") return "720p";
    if (upper === "768P") return "768p";
    if (upper === "1080P" || upper === "HD") return "1080p";
    if (upper === "2K") return "2K";
    if (upper === "4K") return "4K";
    return "";
  }
  if (upper === "1K" || upper === "2K" || upper === "4K") return upper;
  return "";
}
function tierFromModelName(name, kind) {
  const parts = String(name || "").split(/[-_]/);
  for (let i = parts.length - 1; i >= 0; i--) {
    const hit = canonicalBillingTier(parts[i], kind);
    if (hit) return hit;
  }
  return "";
}
function explicitResolution(body) {
  if (!body) return null;
  const direct = [body.image_size, body.imageSize, body.resolution];
  for (let i = 0; i < direct.length; i++) {
    if (direct[i] != null && String(direct[i]).trim()) return String(direct[i]).trim();
  }
  const meta = body.metadata;
  if (meta && meta.image_size != null && String(meta.image_size).trim()) return String(meta.image_size).trim();
  if (meta && meta.resolution != null && String(meta.resolution).trim()) return String(meta.resolution).trim();
  return null;
}
function tierFromPixels(size) {
  if (size == null || typeof RATIO_MAP === "undefined") return "";
  const normalized = String(size).trim().replace(/\s/g, "").toLowerCase();
  if (!normalized) return "";
  const keys = Object.keys(RATIO_MAP);
  const levels = ["1K", "2K", "4K"];
  for (let i = 0; i < keys.length; i++) {
    const sizes = RATIO_MAP[keys[i]] || {};
    for (let n = 0; n < levels.length; n++) {
      if (String(sizes[levels[n]] || "").toLowerCase() === normalized) return levels[n];
    }
  }
  return "";
}
function videoTierFromPixels(value) {
  const match = String(value || "").trim().replace(/\s/g, "").match(/^(\d+)[x×*](\d+)$/i);
  if (!match) return "";
  const max = Math.max(Number(match[1]), Number(match[2]));
  if (!isFinite(max) || max <= 0) return "";
  if (max >= 3840) return "4K";
  if (max >= 2560) return "2K";
  if (max >= 1920) return "1080p";
  if (max >= 1366) return "768p";
  if (max >= 1280) return "720p";
  return "480p";
}
function resolveBillingResolution(body, row) {
  const kind = billingKind(row);
  const modelName = trimmed((body && body.model) || (row && row.downstream) || "");
  const fromName = tierFromModelName(modelName, kind);
  if (fromName) return fromName;
  const explicit = explicitResolution(body);
  if (explicit != null) {
    const known = canonicalBillingTier(explicit, kind);
    if (known) return known;
    if (kind === "image") {
      const pixels = tierFromPixels(explicit);
      if (pixels) return pixels;
    }
    if (kind === "video") {
      const pixels = videoTierFromPixels(explicit);
      if (pixels) return pixels;
    }
    return canonicalBillingTier(row && row.resolution, kind) || (kind === "video" ? "720p" : "1K");
  }
  if (kind === "image" && body && body.size != null && String(body.size).trim()) {
    const size = String(body.size).trim();
    const pixels = tierFromPixels(size);
    if (pixels) return pixels;
    const known = canonicalBillingTier(size, "image");
    if (known) return known;
    return canonicalBillingTier(row && row.resolution, kind) || (kind === "video" ? "720p" : "1K");
  }
  return canonicalBillingTier(row && row.resolution, kind) || (kind === "video" ? "720p" : "1K");
}
function assertSupportedResolution(row, resolution) {
  const supported = row && row.supportedResolutions;
  if (!Array.isArray(supported) || supported.length === 0) return;
  const normalized = String(resolution || "").trim().toLowerCase();
  for (let i = 0; i < supported.length; i++) {
    if (String(supported[i] || "").trim().toLowerCase() === normalized) return;
  }
  throw new Error("不支持此分辨率，请修改后重试");
}
function sendTier(billed, kind) {
  if (kind === "video") return billed;
  if (kind === "image" && /^(1K|2K|4K)$/.test(billed)) return billed;
  return billed;
}
function parseTier(body, row) {
  const kind = billingKind(row);
  return sendTier(resolveBillingResolution(body, row), kind);
}
function imageCount(row, req) {
  if (!row || row.billByImageCount !== true) return 1;
  const n = Number(req && (req.n != null ? req.n : req.image_count));
  if (!isFinite(n) || n < 1) return 1;
  return Math.min(Math.floor(n), 128);
}
function hasReferenceVideo(req) {
  if (!req) return false;
  function filled(value) {
    if (value == null) return false;
    if (typeof value === "string") return trimmed(value) !== "";
    if (Array.isArray(value)) return value.length > 0;
    return true;
  }
  function contentHasVideo(content) {
    if (!Array.isArray(content)) return false;
    for (let i = 0; i < content.length; i++) {
      const item = content[i];
      if (!item || typeof item !== "object") continue;
      if (item.type === "video_url" || item.type === "video") return true;
      if (Object.prototype.hasOwnProperty.call(item, "video_url") || Object.prototype.hasOwnProperty.call(item, "video")) return true;
    }
    return false;
  }
  if (filled(req.video) || filled(req.video_url) || filled(req.videos) || filled(req.reference_video) || filled(req.input_video)) return true;
  if (contentHasVideo(req.content)) return true;
  const meta = req.metadata;
  return !!(meta && (filled(meta.video) || filled(meta.video_url) || contentHasVideo(meta.content)));
}
function pickAcceptedValue(body, accept) {
  const fields = accept && accept.length ? accept : ["aspect_ratio", "aspectRatio", "metadata.aspect_ratio", "metadata.aspectRatio"];
  if (!body) return undefined;
  for (let i = 0; i < fields.length; i++) {
    const v = getPath(body, fields[i]);
    if (v == null || v === "") continue;
    return v;
  }
  return undefined;
}
function videoRatioKeys() {
  const items = Object.keys(RATIO_MAP);
  const out = [];
  for (let i = 0; i < items.length; i++) {
    const ratio = items[i];
    const enabled = RATIO_MAP[ratio] && RATIO_MAP[ratio].videoEnabled;
    if (enabled === true || (enabled == null && (ratio === "16:9" || ratio === "9:16"))) out.push(ratio);
  }
  return out;
}
function videoAspectKeys(row) {
  const configured = row && row.videoAspectRatios;
  if (Array.isArray(configured)) return configured.filter((value) => typeof value === "string" && value);
  const mapped = row && row.videoSizeMap;
  if (mapped && typeof mapped === "object") {
    const fromMap = [];
    const resolutions = Object.keys(mapped);
    for (let i = 0; i < resolutions.length; i++) {
      const sizes = mapped[resolutions[i]];
      if (!sizes || typeof sizes !== "object") continue;
      const aspects = Object.keys(sizes);
      for (let j = 0; j < aspects.length; j++) {
        if (fromMap.indexOf(aspects[j]) < 0) fromMap.push(aspects[j]);
      }
    }
    if (fromMap.length > 0) return fromMap;
  }
  return videoRatioKeys();
}
function nearestVideoAspect(value, row) {
  const target = normalizeRatio(String(value || ""));
  if (!target || target === "auto") return null;
  const targetParts = target.split(":");
  const width = Number(targetParts[0]);
  const height = Number(targetParts[1]);
  if (!isFinite(width) || !isFinite(height) || width <= 0 || height <= 0) return null;
  const supported = videoAspectKeys(row);
  let best = null;
  let bestDiff = Infinity;
  for (let i = 0; i < supported.length; i++) {
    const parts = supported[i].split(":");
    const rw = Number(parts[0]);
    const rh = Number(parts[1]);
    if (!isFinite(rw) || !isFinite(rh) || rw <= 0 || rh <= 0) continue;
    const orientationMismatch = width >= height ? rw < rh : rw >= rh;
    const diff = Math.abs(Math.log((width * rh) / (height * rw))) + (orientationMismatch ? 1e-12 : 0);
    if (diff < bestDiff) {
      bestDiff = diff;
      best = supported[i];
    }
  }
  return best;
}
function hasConfiguredVideoSizes(row) {
  const map = row && row.videoSizeMap;
  return !!(map && typeof map === "object" && Object.keys(map).length);
}
function resolveAspect(body, row) {
  const def = (row && row.defaultAspect) || "16:9";
  const a = pickAcceptedValue(body, PROFILE.aspectAccept);
  if (billingKind(row) === "video") {
    const aspects = videoAspectKeys(row);
    const normalized = a != null ? normalizeRatio(String(a)) : null;
    if (hasConfiguredVideoSizes(row) && normalized && normalized !== "auto") return normalized;
    const explicit = a != null ? nearestVideoAspect(a, row) : null;
    if (explicit) return explicit;
    const fromSize = body && body.size ? nearestVideoAspect(body.size, row) : null;
    if (fromSize) return fromSize;
    if (def !== "omit" && def !== "auto") {
      const normalizedDefault = normalizeRatio(String(def));
      if (hasConfiguredVideoSizes(row) && normalizedDefault && normalizedDefault !== "auto") {
        if (!aspects.includes(normalizedDefault)) return aspects[0] || "16:9";
        return normalizedDefault;
      }
      const configured = nearestVideoAspect(def, row);
      if (configured) return configured;
    }
    return aspects[0] || "16:9";
  }
  const n = a != null ? normalizeRatio(String(a)) : null;
  if (n && n !== "auto" && RATIO_MAP[n]) return n;
  const fromSize = body && body.size ? aspectFromSize(String(body.size)) : null;
  if (fromSize) return fromSize;
  if (def === "omit" || def === "auto") return fromSize || "16:9";
  return def;
}
function suffixFor(aspect, style) {
  const row = RATIO_MAP[aspect];
  if (!row) return String(aspect).replace(":", "x");
  if (style === "slash") return row.suffixSlash;
  if (style === "colon") return row.suffixColon;
  return row.suffixAxis;
}
function secondsUpstreamMode(row) {
  const mode = row && row.secondsUpstream;
  if (mode === "model" || mode === "field" || mode === "off") return mode;
  if (row && row.duration) return "model";
  if (row && row.sendSeconds) return "field";
  return "off";
}
function positiveSeconds(value) {
  if (value == null || value === "") return "";
  const n = Number(value);
  if (!isFinite(n) || n <= 0) return "";
  return String(n);
}
function secondsInModelName(name) {
  const match = String(name || "").match(/-(\d+)s(?=-|$)/i);
  return match ? match[1] : "";
}
function resolveOutgoingSeconds(body, upstream, row) {
  const fromModel = secondsInModelName(body && body.model) || secondsInModelName(upstream);
  if (fromModel) return fromModel;
  const fromSeconds = positiveSeconds(body && body.seconds);
  if (fromSeconds) return fromSeconds;
  const fromDuration = positiveSeconds(body && body.duration);
  if (fromDuration) return fromDuration;
  return positiveSeconds(row && row.defaultSeconds);
}
function applySecondsToModelName(name, seconds) {
  const text = String(name || "");
  if (!seconds) return text;
  const token = "-" + seconds + "s";
  if (/-(\d+)s(?=-|$)/i.test(text)) return text.replace(/-(\d+)s(?=-|$)/i, token);
  return text + token;
}
function stripSecondsFromModelName(name) {
  return String(name || "").replace(/-(\d+)s(?=-|$)/i, "");
}
function firstLastFrameMode(row) {
  const mode = row && row.firstLastFrameMode;
  if (mode === "off" || mode === "passthrough" || mode === "model_suffix" || mode === "top_level_field") return mode;
  return row && row.firstLastFrame === true ? "model_suffix" : "off";
}
function booleanRequestValue(value) {
  if (typeof value === "boolean") return value;
  if (typeof value !== "string") return undefined;
  const normalized = trimmed(value).toLowerCase();
  if (normalized === "true") return true;
  if (normalized === "false") return false;
  return undefined;
}
function firstLastFrameField(body) {
  if (!body) return undefined;
  const snakeCase = booleanRequestValue(body.first_last_frame);
  if (snakeCase !== undefined) return snakeCase;
  return booleanRequestValue(body.firstLastFrame);
}
function hasFirstLastFrameToken(model) {
  return /-fl(?=-|$)/i.test(String(model || ""));
}
function stripFirstLastFrameToken(model) {
  return String(model || "").replace(/-fl(?=-|$)/gi, "");
}
function configuredVideoSize(row, resolution, aspect) {
  const map = row && row.videoSizeMap;
  if (!map || typeof map !== "object") return "";
  const sizes = map[resolution];
  if (!sizes || typeof sizes !== "object") return "";
  return trimmed(sizes[aspect]);
}
function pixelSizeFor(row, body, resolution, aspect) {
  const requested = trimmed(body && body.size);
  if (requested) return requested;
  if (billingKind(row) === "video") {
    const allowed = videoAspectKeys(row);
    if (!allowed.includes(aspect)) throw new Error("不支持此分辨率和比例组合");
    const mapped = configuredVideoSize(row, resolution, aspect);
    if (mapped) return mapped;
    const map = row && row.videoSizeMap;
    if (map && typeof map === "object" && Object.keys(map).length > 0) {
      throw new Error("不支持此分辨率和比例组合");
    }
    return "";
  }
  return (RATIO_MAP[aspect] && RATIO_MAP[aspect][resolution]) || "";
}
function applyModel(row, body) {
  let upstream = (row && row.upstream) || (body && body.model);
  const aspect = resolveAspect(body, row);
  const tier = parseTier(body, row);
  assertSupportedResolution(row, resolveBillingResolution(body, row));
  const mode = (row && row.sendMode) || "passthrough";
  const style = (row && row.suffixStyle) || "axis";
  let size;
  let sendAspect = !!(row && row.sendAspect);
  if (mode === "pixel") size = pixelSizeFor(row, body, tier, aspect);
  else if (mode === "tier") size = tier;
  else if (mode === "tier_plus_ratio") {
    size = tier;
    sendAspect = true;
  } else if (mode === "ratio_only") sendAspect = true;
  else if (mode === "model_suffix" || mode === "model_suffix_plus_ratio") {
    const suf = suffixFor(aspect, style);
    if (suf && String(upstream).indexOf("-" + suf) < 0) upstream = upstream + "-" + suf;
    sendAspect = mode === "model_suffix_plus_ratio" || sendAspect;
    if (mode === "model_suffix") size = pixelSizeFor(row, body, tier, aspect);
  } else if (mode === "model_tier_plus_ratio") {
    if (tier && String(upstream).indexOf("-" + tier) < 0) upstream = upstream + "-" + tier;
    sendAspect = true;
  } else size = body && body.size;
  const secondsMode = secondsUpstreamMode(row);
  const seconds = resolveOutgoingSeconds(body, upstream, row);
  if (secondsMode === "model" && seconds) upstream = applySecondsToModelName(String(upstream), seconds);
  if (secondsMode === "field" && seconds) upstream = stripSecondsFromModelName(String(upstream));
  const frameMode = firstLastFrameMode(row);
  const firstLastFrameInput = firstLastFrameField(body);
  const hasDownstreamToken = hasFirstLastFrameToken(body && body.model);
  let firstLastFrame;
  if (frameMode === "passthrough") {
    firstLastFrame = firstLastFrameInput;
  } else if (frameMode === "model_suffix") {
    if (firstLastFrameInput === true || hasDownstreamToken) {
      upstream = stripFirstLastFrameToken(upstream) + "-fl";
    }
  } else if (frameMode === "top_level_field") {
    upstream = stripFirstLastFrameToken(upstream);
    if (firstLastFrameInput !== undefined || hasDownstreamToken) {
      firstLastFrame = hasDownstreamToken || firstLastFrameInput === true;
    }
  }
  return { upstream: upstream, size: size, aspect: sendAspect ? aspect : undefined, tier: tier, seconds: seconds, firstLastFrame: firstLastFrame };
}
function joinUrl(base, p, query, id) {
  let url = String(base || "").replace(/\/+$/, "") + p;
  if (id) url = url.replace("{id}", encodeURIComponent(id));
  const q = [];
  const src = query || {};
  const keys = Object.keys(src);
  for (let i = 0; i < keys.length; i++) {
    let v = src[keys[i]];
    if (id) v = String(v).replace("{id}", id);
    q.push(encodeURIComponent(keys[i]) + "=" + encodeURIComponent(v));
  }
  if (q.length) url += (url.indexOf("?") >= 0 ? "&" : "?") + q.join("&");
  return url;
}
function pickResultUrl(body) {
  // 主字段是上面 PROFILE.resultPath，这里只做兜底。
  const direct = getPath(body, PROFILE.resultPath);
  if (typeof direct === "string" && /^https?:\/\//i.test(direct)) return direct;
  const cands = [];
  if (body) {
    cands.push(body.url, body.video_url, body.image_url, body.r2Url, body.download_url);
    if (body.data && typeof body.data === "object" && !Array.isArray(body.data)) cands.push(body.data.url);
    if (body.data && Array.isArray(body.data) && body.data[0]) cands.push(body.data[0].url, body.data[0].download_url, body.data[0].origin_url);
    if (body.detail && body.detail.data && body.detail.data[0]) cands.push(body.detail.data[0].download_url, body.detail.data[0].origin_url, body.detail.data[0].url);
    if (body.results && body.results[0]) cands.push(body.results[0].url);
  }
  for (let i = 0; i < cands.length; i++) if (typeof cands[i] === "string" && /^https?:\/\//i.test(cands[i])) return cands[i];
  return "";
}
function mapStatus(raw) {
  const s = String(raw || "").toLowerCase();
  if (["queued", "pending", "not_start", "submitted"].indexOf(s) >= 0) return "QUEUED";
  if (["in_progress", "processing", "running", "generating"].indexOf(s) >= 0) return "IN_PROGRESS";
  if (["completed", "complete", "success", "succeeded", "ok"].indexOf(s) >= 0) return "SUCCESS";
  if (["failed", "failure", "error", "cancelled", "canceled"].indexOf(s) >= 0) return "FAILURE";
  return "";
}

function sanitizePublicErrorMessage(value) {
  let message = trimmed(value);
  if (!message) return "task failed";
  message = message.replace(/\b(?:for|from|in|by)\s+plugin\s+["']?[A-Za-z0-9._-]+["']?/gi, "");
  message = message.replace(/\bplugin(?:_key)?\s*[=:]\s*["']?[A-Za-z0-9._-]+["']?/gi, "internal component");
  message = message.replace(/\bplugin\s+["']?[A-Za-z0-9._-]+["']?/gi, "internal component");
  message = message.replace(/\bhook\s+["']?[A-Za-z0-9._-]+["']?/gi, "internal operation");
  message = message.replace(/[A-Za-z]:[\\/][^\r\n:]+/g, "[internal path]");
  message = message.replace(/\/(?:app|home|srv|var|tmp)\/[^\r\n:]+/g, "[internal path]");
  return message.replace(/\s{2,}/g, " ").trim() || "task failed";
}

function publicResultFields(task) {
  const status = String((task && task.status) || "").toUpperCase();
  if (status === "FAILURE") {
    const data = (task && task.data) || {};
    const nested = data.data && typeof data.data === "object" && !Array.isArray(data.data) ? data.data : {};
    const err = data.error || nested.error;
    let message = String((task && task.fail_reason) || "").trim();
    if (!message && typeof err === "string") message = String(err).trim();
    else if (!message && err && typeof err === "object") message = String(err.message || "").trim();
    if (!message) message = String(data.message || nested.message || "").trim();
    if (!message) message = "task failed";
    return { error: { code: "video_generation_failed", message: sanitizePublicErrorMessage(message) } };
  }
  if (status !== "SUCCESS") return {};
  const url = pickResultUrl((task && task.data) || {});
  if (!url) return {};
  return { url: url, video_url: url, image_url: url };
}

function officialSubmitAction(kind, hasImages) {
  if (kind === "image") return hasImages ? "image_to_image" : "text_to_image";
  return hasImages ? "generate" : "textGenerate";
}

function takeRequestEnumField(body, key) {
  if (!body || typeof body !== "object" || Array.isArray(body)) return undefined;
  const found = body[key];
  delete body[key];
  return found;
}

function audioExtension(value) {
  if (typeof value !== "string") return false;
  const path = value.split("?")[0].split("#")[0].toLowerCase();
  return /[.](mp3|wav|m4a|aac|ogg|oga|flac|opus|wma|aiff|aif)$/.test(path);
}
function isAudioReference(value) {
  if (typeof value === "string") {
    const text = trimmed(value).toLowerCase();
    return text.indexOf("data:audio/") === 0 || audioExtension(text);
  }
  if (!value || typeof value !== "object") return false;
  if (value.type === "audio" || value.type === "audio_url") return true;
  if (value.audio != null || value.audio_url != null) return true;
  const mime = trimmed(value.contentType || value.content_type || value.mimeType || value.mime_type).toLowerCase();
  if (mime.indexOf("audio/") === 0) return true;
  return audioExtension(trimmed(value.filename || value.name)) || audioExtension(value.url);
}
function collectReferenceAudios(req) {
  const out = [];
  function push(value, declared) {
    if (Array.isArray(value)) {
      for (let i = 0; i < value.length; i++) push(value[i], declared);
      return;
    }
    if (typeof value === "string" && trimmed(value) && (declared || isAudioReference(value))) out.push(trimmed(value));
    else if (value && typeof value === "object") {
      let url = value.url || value.audio_url || value.audio;
      if (url && typeof url === "object") url = url.url;
      if (typeof url === "string" && trimmed(url) && (declared || isAudioReference(value))) out.push(trimmed(url));
    }
  }
  const declared = (PROFILE.audioRefAccept && PROFILE.audioRefAccept.length)
    ? PROFILE.audioRefAccept
    : ["audio_url", "audio", "reference_audio", "audios", "input_audio"];
  for (let i = 0; i < declared.length; i++) push(getPath(req, declared[i]), true);
  push(getPath(req, "content"), false);
  push(getPath(req, "metadata.content"), false);
  const unique = [];
  for (let i = 0; i < out.length; i++) if (unique.indexOf(out[i]) < 0) unique.push(out[i]);
  return unique;
}
function splitAudioFiles(files) {
  const audio = [];
  const other = [];
  const input = files || [];
  for (let i = 0; i < input.length; i++) {
    if (isAudioReference(input[i])) audio.push(input[i]);
    else other.push(input[i]);
  }
  return { audio: audio, other: other };
}
function setOutgoingPath(body, path, value) {
  const parts = String(path || "").split(".").filter(Boolean);
  if (!parts.length) return;
  let target = body;
  for (let i = 0; i < parts.length - 1; i++) {
    if (!target[parts[i]] || typeof target[parts[i]] !== "object" || Array.isArray(target[parts[i]])) target[parts[i]] = {};
    target = target[parts[i]];
  }
  target[parts[parts.length - 1]] = value;
}
function requestBoolean(req, path, fallback) {
  const raw = getPath(req, path);
  if (raw == null || raw === "") return fallback === true;
  if (raw === false || raw === 0 || String(raw).toLowerCase() === "false" || String(raw) === "0") return false;
  return true;
}
function audioLimit(row) {
  const configured = Math.floor(Number(row && row.maxReferenceAudios));
  return isFinite(configured) && configured > 0 ? Math.min(configured, 32) : 1;
}
function applyAudioInputs(body, row, req, urls, files, includeFiles) {
  applyGeneratedAudioSwitch(body, row, req);
  const count = urls.length + files.length;
  if (!count) return;
  const field = trimmed(row && row.audioField);
  if (!field) throw new Error("此模型未配置上游音频输入字段");
  const max = audioLimit(row);
  if (count > max) throw new Error("此模型最多允许 " + max + " 个参考音频");
  const values = urls.slice();
  if (includeFiles) {
    for (let i = 0; i < files.length; i++) values.push({ __fileRef: files[i].ref, encoding: "dataUrl" });
  }
  if (values.length) setOutgoingPath(body, field, max === 1 ? values[0] : values);
}
function appendAudioMultipartParts(parts, row, files) {
  const field = trimmed(row && row.audioField);
  for (let i = 0; i < files.length; i++) parts.push({ name: field, fileRef: files[i].ref, filename: files[i].filename });
  return parts;
}

function videoExtension(value) {
  if (typeof value !== "string") return false;
  const path = value.split("?")[0].split("#")[0].toLowerCase();
  return /\.(mp4|webm|mov|m4v|avi|mkv|mpeg|mpg|ogv|3gp)$/.test(path);
}
function isVideoReference(value) {
  if (typeof value === "string") {
    const text = trimmed(value).toLowerCase();
    return text.indexOf("data:video/") === 0 || videoExtension(text);
  }
  if (!value || typeof value !== "object") return false;
  if (value.type === "video" || value.type === "video_url") return true;
  if (value.video != null || value.video_url != null) return true;
  const mime = trimmed(value.contentType || value.content_type || value.mimeType || value.mime_type).toLowerCase();
  if (mime.indexOf("video/") === 0) return true;
  const name = trimmed(value.filename || value.name);
  const url = value.url || (value.image_url && (value.image_url.url || value.image_url));
  return videoExtension(name) || videoExtension(url);
}
function countReferenceVideos(req, files) {
  let count = 0;
  function countValues(value) {
    if (Array.isArray(value)) {
      let total = 0;
      for (let i = 0; i < value.length; i++) total += countValues(value[i]);
      return total;
    }
    return isVideoReference(value) ? 1 : 0;
  }
  function countDeclaredVideos(value, contentOnly) {
    if (Array.isArray(value)) {
      let total = 0;
      for (let i = 0; i < value.length; i++) total += countDeclaredVideos(value[i], contentOnly);
      return total;
    }
    if (value == null || value === "") return 0;
    if (!contentOnly) return 1;
    return isVideoReference(value) ? 1 : 0;
  }
  const declared = PROFILE.videoRefAccept || [];
  for (let i = 0; i < declared.length; i++) {
    count += countDeclaredVideos(getPath(req, declared[i]), false);
  }
  const accept = PROFILE.refAccept || [];
  for (let i = 0; i < accept.length; i++) {
    if (declared.indexOf(accept[i]) >= 0) continue;
    const value = getPath(req, accept[i]);
    if (value == null || value === "" || (Array.isArray(value) && !value.length)) continue;
    count += countValues(value);
    break;
  }
  const direct = ["video", "video_url", "videos", "reference_video", "input_video", "content", "metadata.video", "metadata.video_url", "metadata.reference_video", "metadata.reference_videos", "metadata.content"];
  for (let i = 0; i < direct.length; i++) {
    if (declared.indexOf(direct[i]) >= 0 || accept.indexOf(direct[i]) >= 0) continue;
    const contentOnly = direct[i] === "content" || direct[i] === "metadata.content";
    count += countDeclaredVideos(getPath(req, direct[i]), contentOnly);
  }
  const requestFiles = files || [];
  for (let i = 0; i < requestFiles.length; i++) if (isVideoReference(requestFiles[i])) count += 1;
  return count;
}
function countUploadedVideos(files) {
  const requestFiles = files || [];
  let count = 0;
  for (let i = 0; i < requestFiles.length; i++) if (isVideoReference(requestFiles[i])) count += 1;
  return count;
}

function configuredMediaMaps(row) {
  return row && Array.isArray(row.mediaMaps) ? row.mediaMaps : [];
}
function hasConfiguredMediaMaps(row) {
  return !!(row && Array.isArray(row.mediaMaps));
}
function usesOnlyLegacyMediaMaps(row) {
  const maps = configuredMediaMaps(row);
  if (!maps.length) return false;
  for (let i = 0; i < maps.length; i++) {
    if (maps[i].kind !== "copy" && maps[i].outputMode !== "legacy") return false;
  }
  return true;
}
function hasAudioMediaMap(row) {
  const maps = configuredMediaMaps(row);
  for (let i = 0; i < maps.length; i++) {
    const kind = String((maps[i] && maps[i].kind) || "");
    if (kind === "media_all" || kind.indexOf("audios_") === 0) return true;
  }
  return false;
}
function splitMediaFiles(files) {
  const images = [];
  const videos = [];
  const audios = [];
  const input = files || [];
  for (let i = 0; i < input.length; i++) {
    if (isAudioReference(input[i])) audios.push(input[i]);
    else if (isVideoReference(input[i])) videos.push(input[i]);
    else images.push(input[i]);
  }
  return { images: images, videos: videos, audios: audios };
}
function uniqueMedia(values) {
  const out = [];
  for (let i = 0; i < values.length; i++) if (out.indexOf(values[i]) < 0) out.push(values[i]);
  return out;
}
function mediaValuesForMap(kind, groups) {
  if (kind === "media_all") return uniqueMedia(groups.images.concat(groups.videos, groups.audios));
  if (kind.indexOf("images_") === 0) return groups.images;
  if (kind.indexOf("videos_") === 0) return groups.videos;
  if (kind.indexOf("audios_") === 0) return groups.audios;
  if (kind.indexOf("visual_") === 0) return groups.visual || uniqueMedia(groups.images.concat(groups.videos));
  return [];
}
function mappedMediaValue(map, values) {
  if (!values.length) return undefined;
  const kind = String((map && map.kind) || "");
  if (kind.slice(-7) === "_second") return values[1];
  if (kind.slice(-6) === "_first" || (map && map.outputMode === "single")) return values[0];
  if (map && map.outputMode === "legacy" && trimmed(map.to) === "image" && values.length === 1) return values[0];
  return values;
}
function mediaGroups(imageUrls, videoUrls, audioUrls, mediaFiles, includeFiles) {
  const groups = {
    images: (imageUrls || []).slice(),
    videos: (videoUrls || []).slice(),
    audios: (audioUrls || []).slice(),
    visual: [],
  };
  if (!includeFiles) {
    groups.visual = uniqueMedia(groups.images.concat(groups.videos));
    return groups;
  }
  const kinds = ["images", "videos", "audios"];
  for (let k = 0; k < kinds.length; k++) {
    const kind = kinds[k];
    const files = (mediaFiles && mediaFiles[kind]) || [];
    for (let i = files.length - 1; i >= 0; i--) groups[kind].unshift({ __fileRef: files[i].ref, encoding: "dataUrl" });
  }
  const visualFiles = ((mediaFiles && mediaFiles.images) || []).concat((mediaFiles && mediaFiles.videos) || []);
  for (let i = 0; i < visualFiles.length; i++) groups.visual.push({ __fileRef: visualFiles[i].ref, encoding: "dataUrl" });
  groups.visual = groups.visual.concat(uniqueMedia((imageUrls || []).concat(videoUrls || [])));
  return groups;
}
function applyGeneratedAudioSwitch(body, row, req) {
  const outputField = trimmed(row && row.audioOutputField);
  if (row && row.billByAudio === true && outputField) {
    setOutgoingPath(body, outputField, requestBoolean(req, trimmed(row.audioRequestField) || "generate_audio", row.defaultAudio !== false));
  }
}
function applyMediaMappings(body, row, req, groups) {
  const maps = configuredMediaMaps(row);
  for (let i = 0; i < maps.length; i++) {
    const map = maps[i] || {};
    const to = trimmed(map.to);
    if (!to) continue;
    if (map.kind === "copy") {
      const from = trimmed(map.from);
      const value = getPath(req, from);
      if (from && hasOutgoingValue(value)) setOutgoingPath(body, to, value);
      continue;
    }
    let values = mediaValuesForMap(String(map.kind || ""), groups);
    if (map.kind === "visual_all" && map.outputMode === "legacy") {
      let skipFirst = false;
      let skipSecond = false;
      for (let n = 0; n < maps.length; n++) {
        if (maps[n].kind === "visual_first") skipFirst = true;
        if (maps[n].kind === "visual_second") skipSecond = true;
      }
      const rest = [];
      for (let n = 0; n < values.length; n++) {
        if (n === 0 && skipFirst) continue;
        if (n === 1 && skipSecond) continue;
        rest.push(values[n]);
      }
      values = rest;
    }
    const value = mappedMediaValue(map, values);
    if (value !== undefined) setOutgoingPath(body, to, value);
  }
}
function appendMediaMultipartParts(parts, row, groups) {
  const maps = configuredMediaMaps(row);
  for (let i = 0; i < maps.length; i++) {
    const map = maps[i] || {};
    const to = trimmed(map.to);
    if (!to || map.kind === "copy") continue;
    const value = mappedMediaValue(map, mediaValuesForMap(String(map.kind || ""), groups));
    if (value == null) continue;
    const values = Array.isArray(value) ? value : [value];
    for (let n = 0; n < values.length; n++) {
      const item = values[n];
      if (item && typeof item === "object" && item.__mediaFile) {
        parts.push({ name: to, fileRef: item.__mediaFile.ref, filename: item.__mediaFile.filename });
      } else if (item != null && String(item).trim()) {
        parts.push({ name: to, value: item });
      }
    }
  }
  return parts;
}
function multipartMediaGroups(imageUrls, videoUrls, audioUrls, mediaFiles) {
  const groups = mediaGroups(imageUrls, videoUrls, audioUrls, null, false);
  const kinds = ["images", "videos", "audios"];
  for (let k = 0; k < kinds.length; k++) {
    const kind = kinds[k];
    const files = (mediaFiles && mediaFiles[kind]) || [];
    for (let i = files.length - 1; i >= 0; i--) groups[kind].unshift({ __mediaFile: files[i] });
  }
  groups.visual = groups.images.concat(groups.videos);
  return groups;
}
function mediaMapTargets(row) {
  const out = [];
  const maps = configuredMediaMaps(row);
  for (let i = 0; i < maps.length; i++) {
    if (maps[i] && maps[i].kind === "copy") continue;
    const to = trimmed(maps[i] && maps[i].to);
    if (to) out.push(to.split(".")[0]);
  }
  return out;
}

export const protocols = {
  openai_video: {
    decodeRequest: function (ctx) {
      let req = {};
      if (ctx.body && ctx.body.kind === "json") req = ctx.body.value || {};
      else if (ctx.body && ctx.body.kind === "multipart") {
        const fields = ctx.body.fields || {};
        const ks = Object.keys(fields);
        for (let i = 0; i < ks.length; i++) {
          const values = fields[ks[i]] || [];
          if (!values.length) continue;
          req[ks[i]] = values.length === 1 ? values[0] : values.slice();
        }
      }
      const model = trimmed(ctx.model || req.model);
      if (!model) throw new Error("model is required");
      if (!trimmed(req.prompt) && !trimmed(req.input)) throw new Error("prompt is required");
      req.model = model;
      const requestedResolution = takeRequestEnumField(req, "resolution");
      if (requestedResolution != null && req.image_size == null && req.imageSize == null) {
        req.image_size = requestedResolution;
      }
      takeRequestEnumField(req, "video_input");
      takeRequestEnumField(req, "input_video_seconds");
      const images = collectImages(req, (PROFILE.refAccept || []).concat(PROFILE.videoRefAccept || []), 1);
      const requestFiles = ctx.files || [];
      const files = requestFiles.length;
      const row = findModel(model, req) || {};
      const uploadedVideos = countUploadedVideos(requestFiles);
      if (row.allowVideoUpload !== true && uploadedVideos > 0) {
        throw new Error("此模型未启用视频上传处理");
      }
      const configuredMax = Math.floor(Number(row.maxReferenceVideos));
      const maxVideos = isFinite(configuredMax) && configuredMax > 0 ? Math.min(configuredMax, 32) : 1;
        if (countReferenceVideos(req, requestFiles) > maxVideos) {
          throw new Error("此模型最多允许 " + maxVideos + " 个参考视频");
      }
      const audioFiles = splitAudioFiles(requestFiles).audio;
      const audioCount = collectReferenceAudios(req).length + audioFiles.length;
      if (audioCount > audioLimit(row)) throw new Error("此模型最多允许 " + audioLimit(row) + " 个参考音频");
      if (audioCount > 0 && !trimmed(row.audioField) && !hasAudioMediaMap(row)) throw new Error("此模型未配置上游音频输入字段");
      const kind = row.objectType || PROFILE.objectType;
      return { kind: "submit", model: model, action: officialSubmitAction(kind, images.length > 0 || files > 0 || audioCount > 0), requestBody: req };
    },
    render: function (_ctx, task) {
      return publicResultFields(task);
    },
  },
};

function hasOutgoingValue(value) {
  if (value == null) return false;
  if (typeof value === "string" && !trimmed(value)) return false;
  if (Array.isArray(value) && value.length === 0) return false;
  return true;
}
function applyImageMaps(body, row, req, images, files) {
  const arr = [];
  if (files && files.length) {
    for (let i = 0; i < files.length; i++) arr.push({ __fileRef: files[i].ref, encoding: "dataUrl" });
  }
  if (images && images.length) {
    for (let i = 0; i < images.length; i++) arr.push(images[i]);
  }
  const maps = (row && row.imageMaps) || [];
  if (!maps.length) {
    if (!arr.length) return;
    const imageField = (row && trimmed(row.imageField)) || "images";
    const first = row && trimmed(row.firstFrameField);
    const last = row && trimmed(row.lastFrameField);
    let idx = 0;
    if (first && arr[idx] != null) {
      body[first] = arr[idx];
      idx += 1;
    }
    if (last && arr[idx] != null) {
      body[last] = arr[idx];
      idx += 1;
    }
    const rest = arr.slice(idx);
    if (!imageField || !rest.length) return;
    body[imageField] = imageField === "image" && rest.length === 1 ? rest[0] : rest;
    return;
  }
  let skipFirst = false;
  let skipSecond = false;
  for (let i = 0; i < maps.length; i++) {
    if (maps[i].kind === "images_first") skipFirst = true;
    if (maps[i].kind === "images_second") skipSecond = true;
  }
  for (let i = 0; i < maps.length; i++) {
    const map = maps[i];
    const to = trimmed(map && map.to);
    if (!to) continue;
    if (map.kind === "copy") {
      const from = trimmed(map.from);
      if (!from || !req || !hasOutgoingValue(req[from])) continue;
      body[to] = req[from];
      continue;
    }
    if (map.kind === "images_first") {
      if (arr[0] != null) body[to] = arr[0];
      continue;
    }
    if (map.kind === "images_second") {
      if (arr[1] != null) body[to] = arr[1];
      continue;
    }
    const rest = [];
    for (let n = 0; n < arr.length; n++) {
      if (n === 0 && skipFirst) continue;
      if (n === 1 && skipSecond) continue;
      rest.push(arr[n]);
    }
    if (!rest.length) continue;
    body[to] = to === "image" && rest.length === 1 ? rest[0] : rest;
  }
}
function writeQuality(body, row, req) {
  if (billingKind(row) === "video") return;
  const mode = row && row.qualityMode;
  if (mode === "const") {
    body.quality = trimmed((row && row.qualityValue) || "medium") || "medium";
    return;
  }
  if (mode === "copy" && req && hasOutgoingValue(req.quality)) {
    body.quality = req.quality;
    return;
  }
  if (!mode && row && row.sendQuality && req && hasOutgoingValue(req.quality)) body.quality = req.quality;
}


function writeResponseFormat(body, req) {
  const mode = PROFILE.responseFormatMode || "off";
  if (mode === "const") {
    body.response_format = PROFILE.responseFormatValue === "b64_json" ? "b64_json" : "url";
    return;
  }
  if (mode === "copy" && typeof req.response_format === "string" && trimmed(req.response_format)) {
    body.response_format = trimmed(req.response_format);
  }
}
function writeOutgoingSeconds(body, row, seconds) {
  const mode = secondsUpstreamMode(row);
  if (mode === "model") {
    delete body.seconds;
    return;
  }
  if (mode === "field" && seconds) body.seconds = String(seconds);
}
function writeImageCount(body, row, req) {
  if (!row || row.objectType === "video") return;
  delete body.n;
  delete body.image_count;
  if (row.billByImageCount !== true) return;
  const hasN = req && req.n != null && req.n !== "";
  const hasCount = req && req.image_count != null && req.image_count !== "";
  if (!hasN && !hasCount) return;
  const raw = hasN ? req.n : req.image_count;
  const n = Number(raw);
  const count = !isFinite(n) || n < 1 ? 1 : Math.min(Math.floor(n), 128);
  if (hasN) body.n = count;
  else body.image_count = count;
}
function applyExtraFields(body, req) {
  const fields = PROFILE.extraFields || [];
  for (let i = 0; i < fields.length; i++) {
    const field = fields[i];
    const to = trimmed(field && field.to);
    if (!to || to === "model" || to === "prompt") continue;
    if (field.kind === "const") {
      if (field.value != null && String(field.value) !== "") body[to] = field.value;
      continue;
    }
    const from = trimmed(field && field.from);
    if (!from || !req || !hasOutgoingValue(req[from])) continue;
    body[to] = req[from];
  }
}
function imageMapTargets(row) {
  const out = [];
  const maps = (row && row.imageMaps) || [];
  for (let i = 0; i < maps.length; i++) {
    const to = trimmed(maps[i] && maps[i].to);
    if (to) out.push(to);
  }
  if (row && trimmed(row.imageField)) out.push(trimmed(row.imageField));
  if (row && trimmed(row.firstFrameField)) out.push(trimmed(row.firstFrameField));
  if (row && trimmed(row.lastFrameField)) out.push(trimmed(row.lastFrameField));
  return out;
}
function shouldUseMultipart(hasImages) {
  const type = PROFILE.contentType || "json";
  if (type === "multipart") return true;
  if (type === "smart") return hasImages;
  return false;
}
function isFilePlaceholder(value) {
  return !!(value && typeof value === "object" && typeof value.__fileRef === "string");
}
function jsonBodyToMultipartParts(body, files, urlImages, stripKeys) {
  const parts = [];
  const skip = {};
  for (let i = 0; i < stripKeys.length; i++) if (stripKeys[i]) skip[stripKeys[i]] = true;
  const field = trimmed(PROFILE.formImageField) || "input_reference";
  skip[field] = true;
  const keys = Object.keys(body);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = body[key];
    if (skip[key] || value == null) continue;
    if (isFilePlaceholder(value)) continue;
    if (Array.isArray(value)) {
      let allFiles = true;
      for (let n = 0; n < value.length; n++) if (!isFilePlaceholder(value[n])) allFiles = false;
      if (allFiles) continue;
    }
    if (typeof value === "object") {
      parts.push({ name: key, value: JSON.stringify(value) });
      continue;
    }
    parts.push({ name: key, value: value });
  }
  if (files && files.length) {
    for (let i = 0; i < files.length; i++) {
      parts.push({ name: field, fileRef: files[i].ref, filename: files[i].filename });
    }
  }
  for (let i = 0; i < urlImages.length; i++) {
    if (typeof urlImages[i] === "string" && trimmed(urlImages[i])) {
      parts.push({ name: field, value: trimmed(urlImages[i]) });
    }
  }
  return parts;
}

export function buildSubmitRequest(ctx) {
  const req = ctx.requestBody || {};
  const row = findModel(ctx.model, req) || findModel(ctx.upstreamModel, req);
  if (!row) throw new Error("unsupported model: " + (ctx.model || ""));
  const resolved = applyModel(row, Object.assign({}, req, { model: ctx.model }));
  const imageUrls = collectImages(req, PROFILE.refAccept, PROFILE.refMax);
  const videoUrls = collectImages(req, PROFILE.videoRefAccept);
  const images = imageUrls.slice();
  for (let i = 0; i < videoUrls.length; i++) {
    if (images.indexOf(videoUrls[i]) < 0) images.push(videoUrls[i]);
  }
  const mediaFiles = splitMediaFiles(ctx.files || []);
  const files = mediaFiles.images.concat(mediaFiles.videos);
  const audioFiles = mediaFiles.audios;
  const audios = collectReferenceAudios(req);
  const hasImages = images.length > 0 || files.length > 0;
  const hasAudio = audios.length > 0 || audioFiles.length > 0;
  const body = { model: resolved.upstream, prompt: req.prompt || req.input || "" };
  if (row.sendSize && resolved.size) body.size = resolved.size;
  if ((row.sendAspect || resolved.aspect) && resolved.aspect) {
    body[row.aspectField || PROFILE.aspectField || "aspect_ratio"] = resolved.aspect;
  }
  if (row.sendImageSize && resolved.tier) {
    body[row.imageSizeField || PROFILE.imageSizeField || "image_size"] = resolved.tier;
  }
  writeQuality(body, row, req);
  if (PROFILE.createQuery && PROFILE.createQuery.replyType) body.replyType = PROFILE.createQuery.replyType;
  const useMultipart = shouldUseMultipart(hasImages || hasAudio);
  const modernMedia = hasConfiguredMediaMaps(row) && !(useMultipart && usesOnlyLegacyMediaMaps(row));
  if (modernMedia) {
    applyGeneratedAudioSwitch(body, row, req);
    if (!useMultipart) {
      applyMediaMappings(body, row, req, mediaGroups(imageUrls, videoUrls, audios, mediaFiles, true));
    } else {
      applyMediaMappings(body, row, req, mediaGroups([], [], [], null, false));
    }
  } else {
    applyAudioInputs(body, row, req, audios, audioFiles, !useMultipart);
  }
  if (!modernMedia) {
    if (!useMultipart) applyImageMaps(body, row, req, images, files);
    else {
      const maps = (row && row.imageMaps) || [];
      for (let i = 0; i < maps.length; i++) {
        if (maps[i].kind !== "copy") continue;
        const from = trimmed(maps[i].from);
        const to = trimmed(maps[i].to);
        if (!from || !to || !hasOutgoingValue(req[from])) continue;
        body[to] = req[from];
      }
    }
  }
  applyExtraFields(body, req);
  if (resolved.firstLastFrame !== undefined) body.first_last_frame = resolved.firstLastFrame;
  writeResponseFormat(body, req);
  writeOutgoingSeconds(body, row, resolved.seconds);
  writeImageCount(body, row, req);
  let p = PROFILE.createPath;
  if (PROFILE.byReferenceImage) p = hasImages ? PROFILE.byReferenceImage.with || p : PROFILE.byReferenceImage.without || p;
  const descriptor = {
    url: joinUrl(ctx.baseUrl, p, PROFILE.createQuery),
    method: PROFILE.createMethod || "POST",
    headers: { Authorization: "Bearer " + ctx.apiKey },
    rewriteModel: resolved.upstream,
    action: officialSubmitAction(row.objectType || PROFILE.objectType, hasImages || hasAudio),
  };
  if (useMultipart) {
    descriptor.bodyType = "multipart";
    if (modernMedia) {
      const baseParts = jsonBodyToMultipartParts(body, [], [], mediaMapTargets(row));
      descriptor.parts = appendMediaMultipartParts(
        baseParts,
        row,
        multipartMediaGroups(imageUrls, videoUrls, audios, mediaFiles)
      );
    } else {
      descriptor.parts = appendAudioMultipartParts(
        jsonBodyToMultipartParts(body, files, images, imageMapTargets(row)),
        row,
        audioFiles
      );
    }
    return descriptor;
  }
  descriptor.headers["Content-Type"] = "application/json";
  descriptor.body = body;
  return descriptor;
}

export function parseSubmitResponse(_ctx, response) {
  const body = response.body || {};
  const configuredId = getPath(body, PROFILE.taskIdPath);
  const id = configuredId || body.id || body.task_id || body.taskId || (body.data && (body.data.id || body.data.task_id));
  if (!id) throw new Error("upstream task id is empty");
  return { taskId: String(id), taskData: body };
}

// OSS 无 URL 时最多打这么多次图床，满了回退上游地址。手改这一行。
const REHOST_MAX_ATTEMPTS = 5;

export function buildQueryRequest(ctx) {
  const state = ctx.state || {};
  if (state.phase === "agent_proxy" && state.upstreamUrl) {
    const base = String(PROFILE.mediaProxyBaseUrl || "").replace(new RegExp("/+$"), "");
    return {
      url: base + "/v1/agent/media/register",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: {
        task_id: ctx.publicTaskId,
        upstream_url: state.upstreamUrl,
        public_base_url: base,
      },
    };
  }
  if (state.phase === "rehost" && state.upstreamUrl) {
    return { url: OSS_URL, method: "POST", headers: { "Content-Type": "application/json" }, body: { url: state.upstreamUrl, originalName: "result" } };
  }
  return {
    url: joinUrl(ctx.baseUrl, PROFILE.queryPath, PROFILE.queryQuery, ctx.taskId),
    method: PROFILE.queryMethod || "GET",
    headers: { Authorization: "Bearer " + ctx.apiKey },
  };
}

export function parseTaskResult(ctx, body) {
  const state = ctx.state || {};
  if (state.phase === "agent_proxy") {
    const proxyUrl = pickResultUrl(body);
    if (!proxyUrl) return { status: "FAILURE", reason: "副后端公开地址生成失败，请联系管理员" };
    return { status: "SUCCESS", url: proxyUrl, progress: "100%", state: { phase: "done", ossUrl: proxyUrl } };
  }
  if (state.phase === "rehost") {
    const ossUrl = pickResultUrl(body);
    if (ossUrl) return { status: "SUCCESS", url: ossUrl, progress: "100%", state: { phase: "done", ossUrl: ossUrl } };
    const attempts = Number(state.attempts || 0) + 1;
    if (attempts < REHOST_MAX_ATTEMPTS) {
      return { status: "IN_PROGRESS", progress: "99%", state: { phase: "rehost", upstreamUrl: state.upstreamUrl, attempts: attempts } };
    }
    if (PROFILE.ossFailureAction === "fail_refund") {
      return { status: "FAILURE", reason: "转存图床失败，请联系管理员" };
    }
    if (PROFILE.ossFailureAction === "agent_proxy_success") {
      return { status: "IN_PROGRESS", progress: "99%", state: { phase: "agent_proxy", upstreamUrl: state.upstreamUrl } };
    }
    return { status: "IN_PROGRESS", progress: "99%", state: { phase: "fallback", upstreamUrl: state.upstreamUrl } };
  }
  if (state.phase === "fallback") {
    const url = pickResultUrl(body) || state.upstreamUrl;
    if (!url) return { status: "FAILURE", reason: "rehost failed and upstream url is empty" };
    return { status: "SUCCESS", url: url, progress: "100%", state: { phase: "done", ossUrl: "" } };
  }
  const mapped = mapStatus(body && (body.status || body.state || (body.data && body.data.status)));
  if (mapped === "FAILURE") return { status: "FAILURE", reason: sanitizePublicErrorMessage((body && body.error && (body.error.message || body.error)) || (body && body.message) || "task failed") };
  if (mapped && mapped !== "SUCCESS") return { status: mapped === "QUEUED" ? "QUEUED" : "IN_PROGRESS" };
  const upstreamUrl = pickResultUrl(body);
  if (!upstreamUrl) {
    if (mapped === "SUCCESS") return { status: "FAILURE", reason: "upstream succeeded without a result url" };
    return { status: "IN_PROGRESS" };
  }
  if (!trimmed(OSS_URL)) {
    return { status: "SUCCESS", url: upstreamUrl, progress: "100%", state: { phase: "done", ossUrl: "" } };
  }
  return { status: "IN_PROGRESS", progress: "99%", state: { phase: "rehost", upstreamUrl: upstreamUrl, attempts: 0 } };
}

function billableSeconds(row, req) {
  if (!row || row.billBySeconds !== true) return 1;
  const fromName = Number(secondsInModelName(req && req.model));
  if (isFinite(fromName) && fromName > 0) return fromName;
  const raw = req && (req.seconds != null ? req.seconds : req.duration);
  const n = Number(raw);
  if (isFinite(n) && n > 0) return n;
  const fallback = Number(row.defaultSeconds);
  return isFinite(fallback) && fallback > 0 ? fallback : 1;
}

export function extractUsage(ctx) {
  const req = Object.assign({}, ctx.requestBody || {}, { model: ctx.model || (ctx.requestBody && ctx.requestBody.model) || "" });
  const row = findModel(ctx.model, req) || findModel(ctx.upstreamModel, req) || {};
  const resolution = resolveBillingResolution(req, row);
  assertSupportedResolution(row, resolution);
  if (billingKind(row) === "video") {
    const usage = {
      resolution: resolution,
    };
    if (row.billByReferenceVideo === true) {
      usage.video_input = (hasReferenceVideo(req) || countReferenceVideos(req, ctx.files || []) > 0) ? "video" : "none";
    }
    if (row.billByInputVideoSeconds === true) {
      const hasInputVideo = hasReferenceVideo(req) || countReferenceVideos(req, ctx.files || []) > 0;
      const reserved = Number(row.inputVideoReserveSeconds);
      usage.input_video_seconds = hasInputVideo && isFinite(reserved) && reserved > 0 ? reserved : 0;
    }
    if (row.billByAudio === true) usage.generate_audio = requestBoolean(req, trimmed(row.audioRequestField) || "generate_audio", row.defaultAudio !== false);
    if (row.billBySeconds === true || row.requestCountField !== "request_count") usage.seconds = billableSeconds(row, req);
    else usage.request_count = 1;
    return usage;
  }
  return { resolution: resolution, image_count: imageCount(row, req) };
}

export function extractUsageOnComplete(task, result, body) {
  if (!result || result.status !== "SUCCESS") return {};
  const row = findModel(task && task.model, {}) || findModel(task && task.upstreamModel, {}) || {};
  if (row.billByInputVideoSeconds !== true) return {};
  const path = trimmed(row.inputVideoSecondsPath) || "usage.input_seconds";
  const raw = getPath(body, path);
  if (raw == null || (typeof raw === "string" && trimmed(raw) === "")) return {};
  const seconds = Number(raw);
  const configuredMax = Number(row.inputVideoMaxSeconds || row.inputVideoReserveSeconds);
  const maxSeconds = isFinite(configuredMax) && configuredMax > 0 ? Math.min(configuredMax, 3600) : 3600;
  if (!isFinite(seconds) || seconds < 0 || seconds > maxSeconds) return {};
  return { input_video_seconds: seconds };
}

export function listArtifacts(task) {
  if (task.status !== "SUCCESS") return [];
  const requestBody = (task && (task.requestBody || task.request_body)) || {};
  const properties = (task && task.properties) || {};
  const data = (task && task.data) || {};
  const candidates = [
    requestBody.model,
    properties.origin_model_name,
    properties.upstream_model_name,
    task && task.model,
    data && data.model,
  ];
  let row = null;
  for (let i = 0; i < candidates.length; i++) {
    const candidate = trimmed(candidates[i]);
    if (!candidate) continue;
    row = findModel(candidate, Object.assign({}, requestBody, { model: candidate }));
    if (row) break;
  }
  let type = row && (row.objectType === "image" || row.objectType === "video")
    ? row.objectType
    : PROFILE.objectType;
  if (type !== "image" && type !== "video") type = "file";
  return [{ key: "result", type: type }];
}

export function buildContentRequest(ctx) {
  const url = pickResultUrl(ctx.data) || (ctx.state && ctx.state.ossUrl);
  if (!url) throw new Error("artifact_not_found");
  return { url: url, method: "GET", credentialless: true };
}
