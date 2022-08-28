import {BaseRepository} from "../BaseRepository"
import {CreateRequest} from "../../Model/SurveyQuestion/CreateRequest";

export class RestSurveyQuestionRepository extends BaseRepository {
    readonly CREATE_API_RESOURCE = 'survey-question'
    readonly LIST_API_RESOURCE = 'survey-questions/:id'

    /**
     * Get survey list
     */
    list = (id: string): Promise<any> => {
        return this.query(this.LIST_API_RESOURCE.replace(':id', id))
    }

    create = (request : CreateRequest): Promise<any> => {
        return this.persist(this.CREATE_API_RESOURCE, request)
    }
}
