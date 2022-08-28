import {BaseRepository} from "../BaseRepository"

export class RestSurveyQuestionRepository extends BaseRepository
{
    readonly LIST_API_RESOURCE = 'survey-questions/:id'

    /**
     * Get survey list
     */
    list = (id: string) : Promise<any> => {
        return this.query(this.LIST_API_RESOURCE.replace(':id', id))
    }
}
