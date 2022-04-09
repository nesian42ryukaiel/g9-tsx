export interface Action<T, P = void> {
  readonly type: T;
  readonly payload?: P;
}

/*
export interface Action<T, P> {
  readonly type: T;
  readonly payload?: P;
}

export function createAction<T extends string, P>(type: T, payload: P): Action<T, P> {
  return { type, payload };
}

const IncreaseBusyCountActionType = "IncreaseBusyCount";

type IncreaseBusyCountAction = Action<typeof IncreaseBusyCountActionType, void>;

function createIncreaseBusyCountAction(): IncreaseBusyCountAction {
  return createAction(IncreaseBusyCountActionType, null);
}

type Actions = IncreaseBusyCountAction | DecreaseBusyCountAction;

function busyCount(state: number = 0, action: Actions) {
    switch (action.type) {
        case IncreaseBusyCountActionType: return reduceIncreaseBusyCountAction(state, action);
        case DecreaseBusyCountActionType: return reduceDecreaseBusyCountAction(state, action);
        default: return state;
    }
}

function reduceIncreaseBusyCountAction(state: number, action: IncreaseBusyCountAction): number {
  return state + 1;
}
*/
