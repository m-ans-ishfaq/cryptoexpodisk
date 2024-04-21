type Response = {
    activity: string;
    type: string;
    price: number;
    link: string;
    key: number;
    participants: number;
    accessibility: number;
}

export default async function Test()
{
    const response = await fetch("https://www.boredapi.com/api/activity", { cache: 'no-store' });
    const data = await response.json() as Response;

    return (
        <div>
            <h2>Response from the server</h2>
            <p>{data.activity}</p>
            <p>{data.type}</p>
        </div>
    )
}