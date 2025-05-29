import {Header, StatsCard, TripCard} from "components";
import {formatDate} from "../../../lib/utlis";

const dashboardStats ={
    totalUsers: 1234,
    usersJoined: {currentMonth: 210, lastMonth: 120},
    totalTrips: 3200,
    tripsCreated: {currentMonth: 170, lastMonth: 220},
    userRole: { total: 62, currentMonth: 220, lastMonth: 50 },
}
const allTrips = [{
    id: 1,
    name: "Tropical Rewind",
    imageUrls: ["/assets/images/sample1.jpg"],
    itinerary: [{ location: "Thailand" }],
    tags: ["Adventure", "Culture"],
    travelStyle: "Solo",
    estimatedPrice: "$1,000",
},
    {
        id: 2,
        name: "French Reverie",
        imageUrls: ["/assets/images/sample2.jpg"],
        itinerary: [{ location: "Paris" }],
        tags: ["Relaxation", "Culinary"],
        travelStyle: "Family",
        estimatedPrice: "$2,000",
    },
    {
        id: 3,
        name: "Zen Break",
        imageUrls: ["/assets/images/sample3.jpg"],
        itinerary: [{ location: "Japan" }],
        tags: ["Shopping", "Luxury"],
        travelStyle: "Couple",
        estimatedPrice: "$3,000",
    },
    {
        id: 4,
        name: "Adventure in Westeros",
        imageUrls: ["/assets/images/sample4.jpg"],
        itinerary: [{ location: "Croatia" }],
        tags: ["Historical", "Culture"],
        travelStyle: "Friends",
        estimatedPrice: "$4,000",
    },
];
const users = [
    {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
        imageUrl: "/assets/images/david.webp",
        dateJoined: formatDate("2025-01-01"),
        itineraryCreated: 10,
        status: "user",
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane.smith@example.com",
        imageUrl: "/assets/images/david.webp",
        dateJoined: formatDate("2025-01-02"),
        itineraryCreated: 4,
        status: "user",
    },
    {
        id: 3,
        name: "John Smith",
        email: "john.smith@example.com",
        imageUrl: "/assets/images/david.webp",
        dateJoined: formatDate("2025-01-03"),
        itineraryCreated: 8,
        status: "admin",
    },
];
const {totalUsers, usersJoined, totalTrips, tripsCreated, userRole} = dashboardStats;


const Dashboard = () => {
    const user = { name: 'Lelyan'}

    return (
        <main className="dashboard wrapper">
            <Header title={`Welcome ${user?.name ?? 'Guest'} 👋`}
                description="Track activity, trends and popular destinations in real time"
            />

            <section className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                    <StatsCard
                        headerTitle="Active Users"
                        total={totalUsers}
                        currentMonthCount={usersJoined.currentMonth}
                        lastMonthCount={usersJoined.lastMonth}
                    />
                    <StatsCard
                        headerTitle="Total Trips"
                        total={totalTrips}
                        currentMonthCount={tripsCreated.currentMonth}
                        lastMonthCount={tripsCreated.lastMonth}
                    />
                    <StatsCard
                        headerTitle="Total Users"
                        total={userRole.total}
                        currentMonthCount={userRole.currentMonth}
                        lastMonthCount={userRole.lastMonth}
                    />



                </div>
            </section>
            <section className="container">
                <h1 className="text-xl font-semibold text-dark-100">Created Trips</h1>

                <div className="trip-grid">
                    {allTrips.slice(0, 4).map(({ id, name, imageUrls, itinerary, tags, estimatedPrice }) => (
                        <TripCard
                            key={id}
                            id={id.toString()}
                            name={name}
                            imageUrl={imageUrls[0]}
                            location={itinerary?.[0]?.location ?? ''}
                            tags={tags}
                            price={estimatedPrice}
                        />
                    ))}
                </div>

            </section>




        </main>
    )
}
export default Dashboard
