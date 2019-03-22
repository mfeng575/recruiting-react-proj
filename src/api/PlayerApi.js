import delay from './delay';
import uuid from "uuid";

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const players = [
    {
        id: '1b671a64-40d5-491e-99b0-da01ff1f3341',
        firstName: "Alice",
        lastName: "Geary",
        score: 96,
    },
    {
        id: '10ba038e-48da-487b-96e8-8d3b99b6d18a',
        firstName: "John",
        lastName: "Junge",
        score: 96,
    }, 
    {
        id: '10ab038e-48da-487b-96e8-8d3b99b6d18a',
        firstName: "Tiger",
        lastName: "Woods",
        score: 88,
    },     
    {
        id: 'fdda765f-fc57-5604-a269-52a7df8164ec',
        firstName: "Rob",
        lastName: "Vera",
        score: 88,
    },
    {
        id: '3bbcee75-cecc-5b56-8031-b6641c1ed1f1',
        firstName: "Mike",
        lastName: "Feng",
        score: 89,
    },
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (player) => {
    return uuid.v4();
};

class PlayerApi {
    static getAllPlayers() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(Object.assign([], players));
            }, delay);
        });
    }

    static savePlayer(player) {
        player = Object.assign({}, player); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // server-side validation
                // currently none

                if (player.id) {
                    const existingPlayerIndex = players.findIndex(a => a.id === player.id);
                    players.splice(existingPlayerIndex, 1, player);
                } else {
                    //Just simulating creation here.
                    //The server would generate ids and watchHref's for new courses in a real app.
                    //Cloning so copy returned is passed by value rather than by reference.
                    player.id = generateId(player);
                    players.push(player);
                }

                resolve(player);
            }, delay);
        });
    }

    static deletePlayer(playerId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const indexOfPlayerToDelete = players.findIndex(player => player.id === playerId);
                players.splice(indexOfPlayerToDelete, 1);
                resolve();
            }, delay);
        });
    }


    static getPlayer(playerId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const existingPlayerIndex = players.findIndex(player => player.id === playerId);
                
                const playerFound = Object.assign({}, players[existingPlayerIndex]);

                resolve(playerFound);

            }, delay);
        });
    }

}

export default PlayerApi;
