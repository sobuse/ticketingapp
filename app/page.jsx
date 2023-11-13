import TicketCard from "./(components)/TicketCard"


const getTickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Tickets", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch tickets. Status: ${res.status}`);
    }

    const data = await res.json();
    return data || {}; // Return an empty object if the response is empty
  } catch (error) {
    console.log("Failed to get tickets", error);
    return {};
  }
};


const Dashboard = async() => {
  const {tickets} = await getTickets();

  const uniqueCategory = [
    ...new Set(tickets?.map(({category})=> category)),
  ]

  return (
    <div className="p-5">
      <div>
        {tickets && uniqueCategory?.map((uniqueCategory, categoryIndex) => ( 
        <div Key= {categoryIndex} className="mb-4">
          <h2>{uniqueCategory}</h2>
          <div className="lg:grid grid-cols-2 xl:grid-cols-4"> 
            {tickets.filter((ticket)=> ticket.category === uniqueCategory).map((filteredTicket, _index)=>(
              <TicketCard id={_index} key={_index} ticket={filteredTicket}/>
            ))}
      
      </div>
        </div>))}
      
      </div>
    </div>
  )
}

export default Dashboard