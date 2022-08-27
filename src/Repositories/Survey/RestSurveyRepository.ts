import {BaseRepository} from "../BaseRepository"

export class RestSurveyRepository extends BaseRepository
{
    readonly LIST_API_RESOURCE = 'surveys'
    readonly DETAIL_API_RESOURCE = 'survey/:id'

    /**
     * Get survey list
     */
    list = () : Promise<any> => {
        return this.query(this.LIST_API_RESOURCE)
    }

    /**
     * Get survey detail
     * @param id
     */
    detail = (id: string) : Promise<any> => {
        return this.query(this.DETAIL_API_RESOURCE.replace(':id', id))
    }
}
