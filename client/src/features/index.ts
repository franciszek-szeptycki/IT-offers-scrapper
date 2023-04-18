export const formatText = (text: string) => {
    const index = parseInt(String((document.body.offsetWidth - 90) / 9))
    if (text.length > index && document.body.offsetWidth <= 800) {
        return text.slice(0, index - 3) + '...'
    } else return text
}

export const convertSalary = (salary: number): string => {
    const salaryInThousands = salary / 1000
    return salaryInThousands.toFixed(1) + 'k PLN'
}

export const getEmploymentType = (type: string): string => {
    switch (type) {
        case 'b2b':
            return 'B2B'
        case 'permanent':
            return 'UoP'
        case 'mandate_contract':
            return 'UZ'
        default:
            return type
    }
}