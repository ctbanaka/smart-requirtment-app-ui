export class Employee {
    constructor(

        //changed
        candidate_detail_id?:number,
        candidate_name?: string,
        contact_number?: number,
        candidate_email?: string,
        current_company?: string,
        joining_location?: string,
        salary?: Number,
        tower?: string,
        current_status?: string,
       
    ) {}
}

export class feedbackifno{
    constructor(

        l1_panel_name?: string,
        l1_avarage_rating?: string,
        l2_panel_name?: string,
        l2_avarage_rating?: string
       
       
    ) {}
}

export class canditateexp{
    constructor(

        //changed
        total_exp?: number,
        rel_exp?: number,
        level_based_on_exp?: string,
        proposed_grade?: string,
        band_deviation?: string,
        resume_link?: string
    ) {}
}

export class ctcdetailes{
    constructor(

        //changed
        current_ctc?: string,
        expected_ctc?: string,
        proposed_ctc?: string,
        counter_offered?: string,
        average_c1_ctc?: string,
        hike_percent?: string,
        threshold_value?: string,

    ) {}
}
export class ctchistory{
    constructor(

        //changed
        offered_ctc?: number,
        holding_offer?: number,
        created_by?: string,
        created_date?: string

    ) {}}

    export class joiningdetails{
        constructor(
    
            //changed
            doj?: string,
            dojmonth?: string,
            notice_period?: string
    
        ) {}}