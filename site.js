'use strict';

document.documentElement.classList.add('has-js');

// Local presentation data. These controls never connect to the underlying machines.
const stages = {
  collect: {
    label: '01 / Inputs', title: 'Collect what changed. Check what arrived.',
    copy: 'Scheduled jobs and long-running collectors gather game events, player status and market observations. A response arriving does not automatically make it usable.',
    checks: ['Validate source shape, identities and available timestamps.', 'Track freshness and distinguish an unchanged feed from a new event.', 'Bound paid requests with local credit budgets and usage records.'],
    link: 'inputs', linkText: 'Read the input design →'
  },
  preserve: {
    label: '02 / Evidence', title: 'Keep the information available at the time.',
    copy: 'SQLite records and retained source snapshots connect inputs, calculations and later outcomes. Version identities make a changed implementation distinguishable from an earlier one.',
    checks: ['Preserve source and observation times separately when available.', 'Keep revisions identifiable instead of rewriting the earlier forecast.', 'Use controlled database writers, read-only views and verified backups.'],
    link: 'evidence', linkText: 'Read about evidence and replay →'
  },
  model: {
    label: '03 / Calculation', title: 'Model the game. Keep the comparison honest.',
    copy: 'Each sport has its own state and calculation methods. Established models and research challengers stay identifiable, with shared simulated paths connecting related outcomes.',
    checks: ['Represent sport-specific availability, timing and opportunity.', 'Check consistency between team and player outcomes.', 'Separate an experimental result from permission to replace the established model.'],
    link: 'coherence', linkText: 'Read about coherent calculations →'
  },
  publish: {
    label: '04 / Visibility', title: 'Show the output with its status and limits.',
    copy: 'Dashboards bring game state, estimates and operating context together. A deliberate hold, a stale input and a failed worker need different explanations.',
    checks: ['Keep data age, missing inputs and research labels visible.', 'Recheck validity before eligible research notifications are submitted.', 'Treat provider acceptance and actual phone receipt as different facts.'],
    link: 'visibility', linkText: 'Read about visibility and alerts →'
  },
  review: {
    label: '05 / Feedback', title: 'Check the outcome—and the operating path.',
    copy: 'Later results support evaluation, while replay and health checks support investigation. Changes need their own evidence and a recovery path.',
    checks: ['Compare forecasts with retained outcomes and declared references.', 'Investigate expected work that produced no output.', 'Verify a change before removing its recovery point.'],
    link: 'changes', linkText: 'Read about verification and recovery →'
  }
};

const shots = {
  basketball: { src: 'img_nba.jpg', width: 2100, height: 1400, category: 'NBA / Live observation', title: 'A forecast with its own report card.', copy: 'The live basketball view brings game state, projected outcomes and model disagreement together. The accuracy panel gives the forecast context instead of presenting a number on its own.', alt: 'Recorded NBA live dashboard with game projections and a model accuracy panel' },
  nbapre: { src: 'img_nbapre.jpg', width: 1700, height: 1073, category: 'NBA / Pregame workflow', title: 'Waiting is a visible operating state.', copy: 'The pregame view shows its cycle state, shared API-credit usage and player-support limits. In this capture, no fresh selections pass the filters; a thin or uncertain input is allowed to remain held.', alt: 'NBA pregame dashboard showing waiting status, API-credit usage and no qualifying research selections' },
  hockey: { src: 'img_dash.jpg', width: 2100, height: 982, category: 'NHL / Slate operations', title: 'A whole slate, with health in view.', copy: 'The hockey dashboard places multiple games and model estimates together. Feed-health indicators and filters help separate the game information from the condition of the system producing it.', alt: 'NHL slate dashboard with multiple games, model comparisons and source-health indicators' },
  football: { src: 'img_nfl.jpg', width: 2100, height: 1366, category: 'NFL / Retained research', title: 'Keep the forecast beside its result.', copy: 'The football capture includes a settled paper-research record and forecast diagnostics. A correct individual result does not establish a model advantage; keeping the original record makes broader evaluation possible.', alt: 'NFL dashboard with a settled paper-research record and forecast diagnostics' },
  desk: { src: 'img_mlb.jpg', width: 1700, height: 1073, category: 'Multi-sport / Research desk', title: 'One review surface, distinct native inputs.', copy: 'This MLB-process research desk is displaying NBA inputs. Recorded selections, quote expiry and verification status sit together. Despite its file name and branding, this image is not a baseball-game dashboard.', alt: 'Multi-sport research desk displaying NBA records, expired quotes and verification status' },
  periods: { src: 'img_periods.jpg', width: 1700, height: 833, category: 'Game state / Time horizons', title: 'Make the prediction’s time horizon explicit.', copy: 'The period view exposes forecasts at different parts of a game. Separating the period or remaining window from the full-game result helps a reader understand what a number actually refers to.', alt: 'Recorded period-forecast dashboard with distinct game-time prediction horizons' },
  scenario: { src: 'img_scenario.jpg', width: 1700, height: 1018, category: 'Cross-sport / Scenario research', title: 'Bring research holds and filters into view.', copy: 'The scenario page groups the NBA, NHL and NFL research desks with source and filter status. Its existence demonstrates an organized review surface; it does not establish that scenario research improved predictive performance.', alt: 'Pregame scenario research page with separate NBA, NFL and NHL sections and filter status' },
  review: { src: 'img_review.jpg', width: 2100, height: 996, category: 'Evaluation / Model comparison', title: 'Compare methods on a declared record.', copy: 'The review table places forecast error, bias, coverage and paired comparisons together. Warm-up and hold states keep a small or incomplete record from looking like a settled conclusion.', alt: 'Prospective model-review table showing error, bias, coverage and comparison states' },
  blends: { src: 'img_blends.jpg', width: 2100, height: 1130, category: 'Research / Model combinations', title: 'A combination needs its own explanation.', copy: 'The blend lab keeps different combination methods separately named and shows why a method is holding. Combining several models does not remove the need for eligibility checks or a fair comparison.', alt: 'Model blend lab with separately named methods and explanations of research holds' }
};

const element = id => document.getElementById(id);
const stageButtons = [...document.querySelectorAll('[data-stage]')];
const shotButtons = [...document.querySelectorAll('[data-shot]')];

function selectStage(key) {
  const stage = stages[key];
  if (!stage) return;
  stageButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.stage === key)));
  element('stage-label').textContent = stage.label;
  element('stage-title').textContent = stage.title;
  element('stage-copy').textContent = stage.copy;
  element('stage-link').href = 'engineering.html#' + stage.link;
  element('stage-link').textContent = stage.linkText;
  const items = stage.checks.map(text => {
    const item = document.createElement('li');
    item.textContent = text;
    return item;
  });
  element('stage-checks').replaceChildren(...items);
}

function selectShot(key) {
  const shot = shots[key];
  if (!shot) return;
  shotButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.shot === key)));
  element('shot-category').textContent = shot.category;
  element('shot-title').textContent = shot.title;
  element('shot-copy').textContent = shot.copy;
  const image = element('shot-image');
  image.width = shot.width;
  image.height = shot.height;
  image.alt = shot.alt;
  image.src = shot.src;
  element('shot-full').href = shot.src;
  element('shot-image-link').href = shot.src;
  element('shot-image-link').setAttribute('aria-label', 'Open full-size image: ' + shot.category);
}

stageButtons.forEach(button => button.addEventListener('click', () => selectStage(button.dataset.stage)));
shotButtons.forEach(button => button.addEventListener('click', () => selectShot(button.dataset.shot)));
document.querySelectorAll('[data-gallery-link]').forEach(link => {
  link.addEventListener('click', () => selectShot(link.dataset.galleryLink));
});
document.querySelectorAll('[data-print]').forEach(button => {
  button.addEventListener('click', () => window.print());
});

const menuToggle = document.querySelector('.menu-toggle');
const navigation = element('primary-navigation');
if (menuToggle && navigation) {
  menuToggle.addEventListener('click', () => {
    const open = menuToggle.getAttribute('aria-expanded') !== 'true';
    menuToggle.setAttribute('aria-expanded', String(open));
    navigation.dataset.open = String(open);
  });
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    navigation.dataset.open = 'false';
  }));
  navigation.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      menuToggle.setAttribute('aria-expanded', 'false');
      navigation.dataset.open = 'false';
      menuToggle.focus();
    }
  });
}
