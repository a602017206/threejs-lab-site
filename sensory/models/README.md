# Local sensory models

Downloaded from the official MediaPipe model catalog on 2026-10-16. All inference runs locally; models load only after a camera input or photo is selected.

- `selfie_segmenter.tflite`: [SelfieSegmenter square, float16](https://storage.googleapis.com/mediapipe-models/image_segmenter/selfie_segmenter/float16/latest/selfie_segmenter.tflite). [Official model overview](https://ai.google.dev/edge/mediapipe/solutions/vision/image_segmenter/index#models). Person confidence is foreground; background remains excluded.
- `pose_landmarker_lite.task`: [Pose Landmarker Lite, float16](https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/latest/pose_landmarker_lite.task). [Official model overview](https://ai.google.dev/edge/mediapipe/solutions/vision/pose_landmarker/index#models).

The hand model and matching Tasks Vision WebAssembly runtime reuse `public/particle1/hand_landmarker.task` and `public/particle1/wasm/`.

Web API references: [Image Segmenter](https://ai.google.dev/edge/mediapipe/solutions/vision/image_segmenter/web_js), [Pose Landmarker](https://ai.google.dev/edge/mediapipe/solutions/vision/pose_landmarker/web_js).

Verified file sizes and SHA-256:

| File | Bytes | SHA-256 |
| --- | ---: | --- |
| selfie_segmenter.tflite | 249537 | `191ac9529ae506ee0beefa6b2c945a172dab9d07d1e802a290a4e4038226658b` |
| pose_landmarker_lite.task | 5777746 | `59929e1d1ee95287735ddd833b19cf4ac46d29bc7afddbbf6753c459690d574a` |
