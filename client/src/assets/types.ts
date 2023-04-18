export type IParam = {
    id: number
    name: string
    just_join: string
    no_fluff_jobs: string
    pracuj: string
    image?: string
}


export interface IJustJoinOffer {
    city: string
    company_logo_url: string
    company_name: string
    company_size: string
    company_url: string
    country_code: string
    experience_level: string
    id: string
    marker_icon: string
    published_at: string
    remote: boolean
    skills: {name: string, level: number}[]
    title: string
    employment_types: {
        salary: {
            from: number
            to: number
        },
        type: 'b2b' | 'permanent'
    }[]

}

export interface INoFLuffJobsOffer {
    company: string
    salary: {
        from: number
        to: number
    }
    title: string
    url: string
}

export interface IInfo {
    tech: IParam[]
    exp: IParam[]
    city: IParam[]
}