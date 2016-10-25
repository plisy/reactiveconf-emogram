export interface EmotionData {
    faceRectangle: {
        left: number
        top: number
        width: number
        height: number
    }
    scores: {
        anger: number
        contempt: number
        disgust: number
        fear: number
        happiness: number
        neutral: number
        sadness: number
        surprise: number
    }
}
