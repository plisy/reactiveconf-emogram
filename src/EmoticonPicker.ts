import { EmotionData } from './EmotionData';

export default class EmoticonPicker {

    private static emotionToEmoticonName  = {
        anger: 'angry',
        contempt: 'dull',
        disgust: 'doh',
        fear: 'worry',
        happiness: 'happy',
        neutral: 'speechless',
        sadness: 'sad',
        surprise: 'surprised'
    };

    private static getTopEmotionName(emotionDataPiece: EmotionData) {
        let scores: any[] = [];
        for (let emotion in  emotionDataPiece.scores) {
            scores.push([emotion, emotionDataPiece.scores[emotion]])
        }
        scores.sort((a, b) => b[1] - a[1]);
        return scores[0][0];
    }

    public static getEmoticonUrl(emotionDataPiece: EmotionData) {
        let topEmotionName = this.getTopEmotionName(emotionDataPiece);
        let emoticonName = this.emotionToEmoticonName[topEmotionName];
        return `https://static-asm.secure.skypeassets.com/pes/v1/emoticons/${emoticonName}/views/default_160`
    }

}
