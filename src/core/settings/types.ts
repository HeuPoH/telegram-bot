export type Client = {
    id: number,
    name: string
    chatId: number,
}

export type Settings = {
    token: string
}

export type Alert = {
    id: number,
    name: string,
    delayMin: number,
    text: string
}

export type ReportOne = {
    date: string | null,
    incomingResidue: number | null,
    amountCome: number | null,
    amountOfExpenses: number | null,
    outgoingResidue: number | null
}

export type Note = {
    id: number,
    name: string,
    date: Date,
    currentField: string | null,
    reportId: number,
    data: ReportOne
}

export type Keyboard = {
    text: string,
    callback_data: string
}