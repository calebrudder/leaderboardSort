function leaderboardSort(leaderBoard, moveList){
    moveList.forEach(element => {
        let moveInfo = element.split(' ');
        let player = moveInfo[0];
        let moveAmmount = moveInfo[1];
        let currentIndex = leaderBoard.indexOf(player);
        let newIndex = currentIndex - moveAmmount;

        if(newIndex < currentIndex){
            for(let i = currentIndex; i > newIndex; i--){
                leaderBoard[i] = leaderBoard[i-1];
            }
            leaderBoard[newIndex] = player;
        }else{
            for(let i = currentIndex; i < newIndex; i++){
                leaderBoard[i] = leaderBoard[i+1];
            }
            leaderBoard[newIndex] = player;
        }
    });
    return leaderBoard;
}
