export enum actionGameTypes {
  loadCards = "LOAD_CARDS",
  openCard = "OPEN_CARD",
  closeCard = "CLOSE_CARD",

  setCloseCards = "SET_CLOSE_CARDS",
  removeFromCloseCards = "REMOVE_FROM_CLOSE_CARDS",

  setTargetCardId = "SET_TARGET_CARD_ID",
  resetTargetCardId = "RESET_TARGET_CARD_ID",

  setTargetCardHighligth = "SET_TARGET_CARD_HIGHLIGHT",

  setScore = "SET_SCORE",
  resetScore = "RESET_SCORE",

  setTryCount = "SET_TRY_COUNT",

  setRound = "SET_ROUND",

  setBestScore = "SET_BEST_SCORE",
}

export enum actionChooseCardTypes {
  changeUCSCardCountItem = "CHANGE_UCS_COUNT_ITEM",
  changeUCSCardType = "CHANGE_UCS_CARD_TYPE",
  changeUCSCardColor = "CHANGE_UCS_CARD_COLOR",
}
