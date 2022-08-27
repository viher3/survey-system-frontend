import {BaseRepository} from "../BaseRepository"

export class RestSurveyRepository extends BaseRepository
{
    readonly LIST_API_RESOURCE = 'surveys'

    list = () : Promise<any> => {
        return this.query(this.LIST_API_RESOURCE)
    }
}
