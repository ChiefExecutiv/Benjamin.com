export default function getFormattedDate(dateString: string, includeDate: boolean): string {

    return includeDate ? 
    new Intl.DateTimeFormat('en-US', {  day: 'numeric', month: 'long' , year: 'numeric'}).format(new Date(dateString))
    : new Intl.DateTimeFormat('en-US', { year: 'numeric'}).format(new Date(dateString));
}
