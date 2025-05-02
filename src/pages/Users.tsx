import React, { useEffect, useState } from "react";
import axios from "axios"; // Import Axios

interface User {
    id: number;
    name: {
        firstname: string;
        lastname: string;
    };
    email: string;
    phone: string;
    address: {
        city: string;
        street: string;
        number: number;
        zipcode: string;
    };
}

const Users: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                // Use Axios to make the GET request
                const response = await axios.get("https://fakestoreapi.com/users");
                setUsers(response.data); // Axios stores the data in the `data` property
            } catch (error) {
                console.error("Error fetching users:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                Loading...
            </div>
        );
    }

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-center mb-6">Users</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {users.map((user) => (
                    <div
                        key={user.id}
                        className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
                    >
                        <h2 className="text-xl font-semibold mb-2">
                            {user.name.firstname} {user.name.lastname}
                        </h2>
                        <p className="text-gray-600 mb-1">Email: {user.email}</p>
                        <p className="text-gray-600 mb-1">Phone: {user.phone}</p>
                        <p className="text-gray-600">
                            Address: {user.address.number} {user.address.street}, {user.address.city}, {user.address.zipcode}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Users;
