export interface SurveyQuestionOption {
    type: string,
    values: string[],
    position: number,
    enabled: boolean
}

export const OPTION_TYPES = {
    text: 'text',
    radio: 'radio',
}
