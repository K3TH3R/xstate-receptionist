# xstate-receptionist
An (experimental) event choreographer for XState, based on discussions here: https://github.com/statelyai/xstate/discussions/2259


Goals:
- [] Allow the ability to communicate between various actors in a working system without having to explicitly pass a `Ref` between actors prior to the ability to communicate with them.
- [] Make refactoring component hierarchies a non-risky developer workflow and eliminate prop drilling
- [] Allow registration queue so that actors can be informed, or be automatically registered, when an actor identifies itself with the Receptionist
- [] Actor Types:
  - [] Actor - can register itself as a globally-accessible actor that other machines can send events to
  - [] Publisher - can register to have other actors/machines subscribe to it's emitted events
  - [] Subscriber - can register to receive events from a Publisher (ideally can specify events to listen to)
  - [] Explicit - send an event directly to another actor that has been globally registered
  - [] Workers - ability to communicate with service/web workers that are invoked from parent machines