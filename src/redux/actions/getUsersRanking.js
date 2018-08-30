const myAPIUrl = 'http://localhost:8080/ranking/'

const fetchUsersRanking = (bookId) => {
  axios.get(`${myAPIUrl}/${bookId}`)
    .then(response => {
      return response.ranking;
    });
};

const averageRanking = (ranking) => {
  return Math.floor(
    ranking.reduce((a, b) => a.value + b.value, 0)
      / ranking.length
  );
};

const getRankingAverage = ({ ranking }) => {
  return {
    rankingAverage: averageRanking(ranking)
  };
};

module.exports = getRankingValue;
