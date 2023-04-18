import {IJustJoinOffer, INoFLuffJobsOffer} from "../assets/types";
import NfjLogo from "../assets/img/nfj-logo.png";
import {convertSalary, formatText, getEmploymentType} from "../features";

export const JustJoinItOffer = ({data}: { data: IJustJoinOffer }) => (
    <a target="_blank" href={"https://justjoin.it/offers/" + data.id} className="jjit-offer offer">

        <img src={data.company_logo_url} alt={data.title} className='offer__img' />

        <div className="offer__info" >
            <p className='offer__info-title' >{formatText(data.title)}</p>
            <p className="offer__info-company">{formatText(data.company_name)}</p>
        </div>

        <div className="offer__salary">
            {data.employment_types.map((item, key  :number ) =>
                (<p key={key} className="jjit-offer__salary-info">
                        {item.salary
                            ? `${getEmploymentType(item.type)} ${convertSalary(item.salary.from)} - ${convertSalary(item.salary.to)}`
                            : "UNDISCLOSED SALARY"}
                </p>
            ))}
        </div>
    </a>
)

export const NoFluffJobsOffer = ({data}: {data: INoFLuffJobsOffer}) => (
    <a target="_blank" href={'https://nofluffjobs.com' + data.url} className='nfj-offer offer' >

        <img src={NfjLogo} alt="No FLuff Jobs - logo" className='offer__img' />

        <div className="offer__info" >
            <p className='nfj-offer__info-title' >{formatText(data.title)}</p>
            <p className="nfj-offer__info-company"> {formatText(data.company)}</p>
        </div>

        <div className="offer__salary">
            {convertSalary(data.salary.from)} - {convertSalary(data.salary.to)}
        </div>
    </a>
)
