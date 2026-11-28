# Platform architecture — public overview

Reviewed 27 November 2026. This is a curated conceptual description of an independent, AI-assisted platform. It is not an inventory of every running process, a live-status report or the private implementation source.

## The shape of the system

```text
Sport-specific source observations
  game events | player availability | market observations
                         |
              Collect and validate
                         |
         Retained inputs and calculation identity
                         |
        Sport-specific state and model calculations
           established path | research challengers
                         |
         Dashboards, holds and eligible research alerts
                         |
             Outcomes, evaluation and replay

Operating practices across these responsibilities:
  scheduling | health checks | resource limits | API budgets
  source identity | backups | staged changes | recovery
```

The four sports have separate projects and operating boundaries. The diagram describes recurring responsibilities; it does not imply one universal engine or identical controls everywhere.

## Technology and structure

- Windows workstation, with scheduled jobs and long-running Python services.
- SQLite evidence stores and retained source artifacts.
- Documented live-service designs use one owning database writer, WAL and read-only dashboard connections.
- Separate collection, calculation, storage, evaluation, presentation and operations responsibilities.
- Versioned source/configuration identities and retained inputs support specific replay paths.
- Private dashboard access is distinct from this public static portfolio.

## Sport-specific responsibilities

| Sport | Documented focus |
| --- | --- |
| NBA | Live score/play-by-play observation; separate pregame availability, rotation and player-opportunity research; shared lineup and team-minute constraints |
| NHL | Live score/clock/manpower/shot context; goalie and lineup research; shared player/team paths; input quarantine and partial coverage reporting |
| NFL | Live play-by-play and game state; separate pregame quarterback, inactive and joint-opportunity research; bounded live-service recovery |
| MLB | Shared inning/base/out/score simulation; related batter and pitcher outcomes; isolated pitch-level candidate and explicit model/capital authority |

The public gallery includes a multi-sport desk branded “MLB Research” while displaying NBA inputs. A native baseball-game capture is not part of the current image set.

## Design choices worth inspecting

1. **Timing is part of input quality.** Event time, provider update, local receipt, calculation and issue time are different facts. Unknown timestamps remain unknown.
2. **Preserve the decision context.** Retained observations and version identities help explain what a calculation knew at issue time. Later outcomes and revisions do not justify rewriting the original forecast.
3. **Keep related outcomes coherent.** Shared game paths connect team and player results. For example, simulated baseball runs add up to the same simulated team score.
4. **Separate experimental output from authority.** Research challengers do not automatically replace an established model. A successful installer or test suite does not change a model's scientific standing.
5. **Budget constrained resources.** Worker limits, time budgets, storage holds and local API-credit ledgers reduce interference and make constraints visible. Shared provider accounts remain an important accounting limit.
6. **Verify output, not just liveness.** Expected jobs and produced records are separate checks. Deliberate holds need different explanations from failures.
7. **Plan recovery with the change.** Relevant projects include staged checks, verified backups, release identities and revert paths. The precise mechanism differs by project.

## Evidence boundaries

This platform has documented defects, incomplete coverage and ongoing research. Replay can reproduce a calculation without establishing the quality of its assumptions. A coherent model can still be poorly calibrated. A large simulation cannot establish a profitable strategy.

No reliable advantage over closing betting markets, universal calibration, guaranteed uptime or defect-free automation is claimed. The platform operates on one workstation; it is not a high-availability multi-host deployment. Independent platform work and professional enterprise support remain distinct experience.

AI is used heavily for implementation. Jahvar's role includes direction, architecture decisions, operating rules, investigation and verification.

## Public references

- [Architecture tour](https://cptvar.github.io/#how)
- [Engineering field guide](https://cptvar.github.io/engineering.html)
- [Recorded dashboard gallery](https://cptvar.github.io/#see)
- [Incident investigations](https://cptvar.github.io/#broke)
- [Source basis and limitations](https://cptvar.github.io/engineering.html#references)

The descriptions draw on retained NBA model/operations notes, NHL live and recovery notes, NFL live-observer documentation, MLB architecture/release records and November 2026 audit and incident records. Private addresses, credentials, private implementation files and sealed prospective outcomes are excluded from this public overview.
