# Flying Spaghetti Monster
A small DSL for parsing a state machine and creating Amazon State Language

## DSL
```
---
Start: AddTwoNumbers
States:
  AddTwoNumbers:
    Is: Task
    Task: resourceURI
    Next: MultiplyByNegativeThree
  MultiplyByNegativeThree:
    Is: Task
    Task: resourceURI
    Next: AbsoluteValue
  AbsoluteValue:
    Is: Task
    Task: resourceURI
    Next: IsEven
  IsEven:
    Is: Task
    Task: resourceURI
    Next: BreakEvenOrOdd 
  SplitOdds:
    Is: Choice
    Odds:
      Is: even != true
    Evens:
      Is: even == true
  Odds:
    Is: Task
    End: True
    Task: Odds
  Evens:
    Is: Task
    End: True
    Task: Evens
    
```
### The specification
The specification file uses YML, because it is a simple, straightforward format,
especially when compared to full JSON.

The first line of the file is the start location of the file, starting with
`Start`.  This should be the name of a step we will be defining in the next
step.

After defining our start point, we start defining the states/steps we will be using.
We start this section with a `Steps` name.  

Within this section, we put the names of each step, indented under `Steps` 
using two spaces, like this:
```
  AddTwoNumbers:
``` 

This will add a step to our state machine called `AddTwoNumbers`.  Indented under those,
we can add our specifications.

#### Types
Currently, two types are supported: `Task` and `Choice`.

##### Tasks
Tasks are effects or functions.  Common examples of tasks could be checking the availability
of a product, or transforming something as part of a process.

To specify that something is a task, use `Is: Task` within the specification.

Tasks also take a function name, using an AWS Lambda or States URI.  This can be
specificed using the `Task:` directive, followed by the URI for the resource, such as
```
    Task: resourceURI
```

After we specify the Task URI, we need to tell the state machine where we are going with
it next.  We can do this using the `Next` flag, or by setting `End: true`.

##### Choice
Choices are decision points in our state machine.  For example, if we receive an error from a step of the machine,
we can have it stop.


## How this all works
Using the DSL above, we can generate an Amazon State Language specification for our
defined state machine.

Using the generated ASL definition, we can use the included simulator functionality to work through
the ASL definition and test it.

### Generating the ASL
Run `npm run generate` to turn a spec file into an ASL definition.

### Simulating functions
In order to run the simulator, for each function in the state machine, create a function in the file 
`simulator/functions.js` (or you can use this as a load point to specific files) with the **same name**, case sensitive.
When the simulator runs, functions that would be run as part of the state machine's run will be run using the same
name as specified in the state definition.  In addition, choice states will be evaluated in the simulator using the
existing syntax.

You can run the tests for the simulator functions using `npm run sim-test`

Run the simulation using `npm run simulate`.

