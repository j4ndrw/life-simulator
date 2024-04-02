---

kanban-plugin: basic

---


## TODO

- [ ] Create more LLM primitives - ReAct, CoT (Chain-of-Thought), etc...
#llm

- [ ] Test LLM reasoning capabilities - i.e. test ReAct, CoT, etc...
#llm

- [ ] Create orchestrator LLM - Responsible with aiding in the environment creation
#llm environment

- [ ] Create initial archetypes - Find a schema to represent things like gender, occupation, manifestation (human, dog, worm, etc...), beliefs (religion, philosophies, etc...), psychological states (i.e. happy, depressed + traumas if there are any, etc...), etc...
#environment orchestrator

- [ ] Create initial resources and consumables - E.g. chemical elements, foods, beverages, tools, etc...
#enviroment orchestrator

- [ ] Create socio-economic-related primitives - The LLMs should first start of as pretty primitive, but we need to have this framework around so that they can evolve and create their own socio-economic solutions.
#environment

- [ ] Create simulated world - Bring all those environment entities into one aggregate
#environment orchestrator

- [ ] Implement shelter primitive - a place the 1 or more LLM agents can be safe. Note that the shelter does not guarantee 100% chance of safety - this percentage depends on the type of shelter (e.g. a mansion vs a house made of sticks)
#environment

- [ ] Implement farming primitive - LLMs should be able to plant their own crops / gather their own food (can be other LLM agents, depending on nutrition - e.g. human LLM agents could cook and eat a chicken LLM agent)
#environment

- [ ] Create a dashboard where you can monitor the LLMs
#ui

- [ ] Implement reproduction system - LLM agents should be able to reproduce and create another, more primitive, agent. Requires a stats mechanic.
#evolution

- [ ] Implement stats - E.g. intelligence points, physical shape (fat, skinny, muscular + support for anomalies)
#evolution

- [ ] Implement ephemerality - LLM agents shouldn't live forever, they'll have to die at some point. Using time as a metric is not great, as it makes the overseer's job (us) more difficult - we have to wait for stuff to happen. Find a different metric, that makes monitoring easier.
#evolution

- [ ] Implement stats dynamism - stats should constantly change by a small percentage depending on external factors, as well as the LLM agent's internal states (e.g. if the LLM suffers from depression, one of the stats we could increase is weight gain) - leverage the orchestrator LLM for this
#evolution

- [ ] Implement death by external factors - LLM agents can't just die based on the TTL metric. External factors matter. E.g. have they been killed? have they suffered from a terminal illness, etc...
#evolution

- [ ] Implement identification - all LLM agents should be able to identify themselves in some way. I.e. name, age (e.g. 25 units of time), archetype, relatives (other LLM agents), etc... When being identified, not all info has to be given at once, it can be segmented.
#evolution

- [ ] Implement science - LLM agents should be able to create other objects based on their discoveries of the world. Those objects would be new instances of the primitives (e.g. archetypes, resources, laws, etc...)
#evolution

- [ ] Implement career creation - LLM agents should be able to create their own careers / occupations, based on their current socio-economic needs and obligations.
#evolution

- [ ] Implement trading - LLM agents can trade currencies or objects for other currencies or objects. Those objects can be anything they posess.
#evolution

- [ ] Implement a database where all this info is stored. Make sure to cap it to something sensible, so that the orchestrator and the LLMs don't generate things infinitely. Also, generating things out of nowhere has to make sense. A metric of how the society is impacted by this could be helpful. If the society is impacted in any way by the invention, we put it in the db
#environment db

## Work in progress

## Done

## Archive


%% kanban:settings
```
{"kanban-plugin":"basic"}
```
%%
