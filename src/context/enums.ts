export enum actionGameTypes {
  loadCards = "LOAD_CARDS",
  openCard = "OPEN_CARD",
  closeCard = "CLOSE_CARD",
  setTargetCardId = "SET_TARGET_CARD_ID",
  setScore = "SET_SCORE",
  setTryCount = "SET_TRY_COUNT",
  setRound = "SET_ROUND",
  setBestScore = "SET_BEST_SCORE",
}

export enum actionChooseCardTypes {
  changeUCSCardCountItem = "CHANGE_UCS_COUNT_ITEM",
  changeUCSCardType = "CHANGE_UCS_CARD_TYPE",
  changeUCSCardColor = "CHANGE_UCS_CARD_COLOR",
}