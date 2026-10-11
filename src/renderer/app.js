const SOURCE_LABELS = {
  IOMS_KEYBOARD: 'Keyboard',
  IOMS_MOUSE_BUTTON: 'Mouse button',
  IOMS_MOUSE_WHEEL: 'Mouse wheel'
};

const KEY_LABELS = {
  KEY_SPACE: 'Space', KEY_LSHIFT: 'Left Shift', KEY_RSHIFT: 'Right Shift', KEY_LCONTROL: 'Left Ctrl', KEY_RCONTROL: 'Right Ctrl',
  KEY_LMENU: 'Left Alt', KEY_RMENU: 'Right Alt', KEY_CAPITAL: 'Caps Lock', KEY_RETURN: 'Enter', KEY_BACK: 'Backspace',
  KEY_LBRACKET: '[', KEY_RBRACKET: ']', KEY_PERIOD: '.', KEY_COMMA: ',', KEY_PLUS: '+', KEY_MINUS: '-', KEY_ADD: 'Num +', KEY_SUBTRACT: 'Num -',
  KEY_PAGEUP: 'Page Up', KEY_PAGEDOWN: 'Page Down', KEY_DELETE: 'Delete', KEY_INSERT: 'Insert', KEY_HOME: 'Home',
  IOM_WHEEL_UP: 'Wheel up', IOM_WHEEL_DOWN: 'Wheel down', MOUSE_LEFT: 'Mouse left', MOUSE_RIGHT: 'Mouse right', MOUSE_MIDDLE: 'Mouse middle'
};

const BASIC_CATEGORIES = new Set(['On foot', 'Driving', 'Weapons', 'Combat', 'Phone', 'Interface', 'General']);
const FULL_MAPPING_DATA = ["INPUT_NEXT_CAMERA|K|KEY_V","INPUT_INTERACTION_MENU|K|KEY_M","INPUT_WEAPON_WHEEL_NEXT|W|IOM_WHEEL_DOWN","INPUT_WEAPON_WHEEL_PREV|W|IOM_WHEEL_UP","INPUT_DROP_WEAPON|K|KEY_F9","INPUT_DROP_AMMO|K|KEY_F10","INPUT_SELECT_NEXT_WEAPON|W|IOM_WHEEL_DOWN","INPUT_SELECT_PREV_WEAPON|W|IOM_WHEEL_UP","INPUT_CHARACTER_WHEEL|K|KEY_LMENU","INPUT_SPRINT|K|KEY_LSHIFT","INPUT_JUMP|K|KEY_SPACE","INPUT_ENTER|K|KEY_F","INPUT_ATTACK|B|MOUSE_LEFT","INPUT_AIM|B|MOUSE_RIGHT","INPUT_LOOK_BEHIND|K|KEY_C","INPUT_PHONE|K|KEY_UP","INPUT_PHONE|B|MOUSE_MIDDLE","INPUT_MOVE_UP_ONLY|K|KEY_W","INPUT_MOVE_DOWN_ONLY|K|KEY_S","INPUT_MOVE_LEFT_ONLY|K|KEY_A","INPUT_MOVE_RIGHT_ONLY|K|KEY_D","INPUT_DUCK|K|KEY_LCONTROL","INPUT_VEH_DUCK|K|KEY_X","INPUT_SELECT_WEAPON|K|KEY_TAB","INPUT_SNIPER_ZOOM_IN_ONLY|W|IOM_WHEEL_UP","INPUT_SNIPER_ZOOM_IN_ONLY|K|KEY_RBRACKET","INPUT_SNIPER_ZOOM_OUT_ONLY|W|IOM_WHEEL_DOWN","INPUT_SNIPER_ZOOM_OUT_ONLY|K|KEY_LBRACKET","INPUT_COVER|K|KEY_Q","INPUT_RELOAD|K|KEY_R","INPUT_DETONATE|K|KEY_G","INPUT_HUD_SPECIAL|K|KEY_Z","INPUT_ARREST|K|KEY_F","INPUT_CONTEXT|K|KEY_E","INPUT_VEH_MOVE_UP_ONLY|K|KEY_LSHIFT","INPUT_VEH_MOVE_UP_ONLY|K|KEY_NUMPAD8","INPUT_VEH_MOVE_DOWN_ONLY|K|KEY_LCONTROL","INPUT_VEH_MOVE_DOWN_ONLY|K|KEY_NUMPAD5","INPUT_VEH_MOVE_LEFT_ONLY|K|KEY_A","INPUT_VEH_MOVE_RIGHT_ONLY|K|KEY_D","INPUT_VEH_AIM|B|MOUSE_RIGHT","INPUT_VEH_ATTACK|B|MOUSE_LEFT","INPUT_VEH_ATTACK2|K|KEY_RCONTROL","INPUT_VEH_ATTACK2|B|MOUSE_RIGHT","INPUT_VEH_ACCELERATE|K|KEY_W","INPUT_VEH_PUSHBIKE_SPRINT|K|KEY_CAPITAL","INPUT_VEH_PUSHBIKE_FRONT_BRAKE|K|KEY_Q","INPUT_VEH_BRAKE|K|KEY_S","INPUT_VEH_HEADLIGHT|K|KEY_H","INPUT_SWITCH_VISOR|K|KEY_F11","INPUT_VEH_EXIT|K|KEY_F","INPUT_VEH_HANDBRAKE|K|KEY_SPACE","INPUT_VEH_HOTWIRE_LEFT|K|KEY_W","INPUT_VEH_HOTWIRE_RIGHT|K|KEY_S","INPUT_VEH_LOOK_BEHIND|K|KEY_C","INPUT_VEH_CIN_CAM|K|KEY_R","INPUT_VEH_NEXT_RADIO|K|KEY_PERIOD","INPUT_VEH_SELECT_NEXT_WEAPON|W|IOM_WHEEL_UP","INPUT_VEH_PREV_RADIO|K|KEY_COMMA","INPUT_VEH_RADIO_WHEEL|K|KEY_Q","INPUT_VEH_NEXT_RADIO|W|IOM_WHEEL_DOWN","INPUT_VEH_HORN|K|KEY_E","INPUT_VEH_FLY_BOOST|K|KEY_LSHIFT","INPUT_VEH_FLY_THROTTLE_UP|K|KEY_W","INPUT_VEH_FLY_THROTTLE_DOWN|K|KEY_S","INPUT_VEH_FLY_YAW_LEFT|K|KEY_A","INPUT_VEH_FLY_YAW_RIGHT|K|KEY_D","INPUT_VEH_SELECT_NEXT_WEAPON|K|KEY_TAB","INPUT_VEH_SELECT_PREV_WEAPON|K|KEY_LBRACKET","INPUT_VEH_GRAPPLING_HOOK|K|KEY_E","INPUT_VEH_CINEMATIC_UP_ONLY|W|IOM_WHEEL_UP","INPUT_VEH_CINEMATIC_UP_ONLY|K|KEY_ADD","INPUT_VEH_CINEMATIC_DOWN_ONLY|W|IOM_WHEEL_DOWN","INPUT_VEH_CINEMATIC_DOWN_ONLY|K|KEY_SUBTRACT","INPUT_VEH_SLOWMO_UP_ONLY|W|IOM_WHEEL_UP","INPUT_VEH_SLOWMO_UP_ONLY|K|KEY_PAGEUP","INPUT_VEH_SLOWMO_DOWN_ONLY|W|IOM_WHEEL_DOWN","INPUT_VEH_SLOWMO_DOWN_ONLY|K|KEY_PAGEDOWN","INPUT_CINEMATIC_SLOWMO|K|KEY_L","INPUT_VEH_FLY_ROLL_LEFT_ONLY|K|KEY_NUMPAD4","INPUT_VEH_FLY_ROLL_RIGHT_ONLY|K|KEY_NUMPAD6","INPUT_VEH_FLY_PITCH_UP_ONLY|K|KEY_NUMPAD8","INPUT_VEH_FLY_PITCH_DOWN_ONLY|K|KEY_NUMPAD5","INPUT_VEH_FLY_UNDERCARRIAGE|K|KEY_G","INPUT_VEH_FLY_ATTACK|K|KEY_SPACE","INPUT_VEH_FLY_ATTACK|B|MOUSE_RIGHT","INPUT_VEH_FLY_SELECT_TARGET_LEFT|K|KEY_NUMPAD7","INPUT_VEH_FLY_SELECT_TARGET_RIGHT|K|KEY_NUMPAD9","INPUT_VEH_SUB_TURN_HARD_LEFT|K|KEY_A","INPUT_VEH_SUB_TURN_LEFT_ONLY|K|KEY_NUMPAD4","INPUT_VEH_SUB_TURN_HARD_RIGHT|K|KEY_D","INPUT_VEH_SUB_TURN_RIGHT_ONLY|K|KEY_NUMPAD6","INPUT_VEH_SUB_PITCH_UP_ONLY|K|KEY_NUMPAD8","INPUT_VEH_SUB_PITCH_DOWN_ONLY|K|KEY_NUMPAD5","INPUT_VEH_SUB_THROTTLE_UP|K|KEY_W","INPUT_VEH_SUB_THROTTLE_DOWN|K|KEY_S","INPUT_VEH_SUB_ASCEND|K|KEY_LSHIFT","INPUT_VEH_SUB_DESCEND|K|KEY_LCONTROL","INPUT_MELEE_ATTACK_LIGHT|K|KEY_R","INPUT_MELEE_ATTACK_HEAVY|K|KEY_Q","INPUT_MELEE_BLOCK|K|KEY_SPACE","INPUT_PARACHUTE_DEPLOY|B|MOUSE_LEFT","INPUT_PARACHUTE_DEPLOY|K|KEY_F","INPUT_PARACHUTE_DETACH|K|KEY_F","INPUT_PARACHUTE_TURN_LEFT_ONLY|K|KEY_A","INPUT_PARACHUTE_TURN_RIGHT_ONLY|K|KEY_D","INPUT_PARACHUTE_PITCH_UP_ONLY|K|KEY_W","INPUT_PARACHUTE_PITCH_DOWN_ONLY|K|KEY_S","INPUT_PARACHUTE_BRAKE_LEFT|K|KEY_Q","INPUT_PARACHUTE_BRAKE_RIGHT|K|KEY_E","INPUT_PARACHUTE_SMOKE|K|KEY_X","INPUT_PARACHUTE_PRECISION_LANDING|K|KEY_LSHIFT","INPUT_SELECT_WEAPON_UNARMED|K|KEY_1","INPUT_SELECT_WEAPON_MELEE|K|KEY_2","INPUT_SELECT_WEAPON_SHOTGUN|K|KEY_3","INPUT_SELECT_WEAPON_HEAVY|K|KEY_4","INPUT_SELECT_WEAPON_SPECIAL|K|KEY_5","INPUT_SELECT_WEAPON_HANDGUN|K|KEY_6","INPUT_SELECT_WEAPON_SMG|K|KEY_7","INPUT_SELECT_WEAPON_AUTO_RIFLE|K|KEY_8","INPUT_SELECT_WEAPON_SNIPER|K|KEY_9","INPUT_WEAPON_SPECIAL_TWO|K|KEY_E","INPUT_SELECT_CHARACTER_MICHAEL|K|KEY_F5","INPUT_SELECT_CHARACTER_FRANKLIN|K|KEY_F6","INPUT_SELECT_CHARACTER_TREVOR|K|KEY_F7","INPUT_SELECT_CHARACTER_MULTIPLAYER|K|KEY_F8","INPUT_REPLAY_START_STOP_RECORDING|K|KEY_F1","INPUT_REPLAY_START_STOP_RECORDING_SECONDARY|K|KEY_F2","INPUT_SAVE_REPLAY_CLIP|K|KEY_F3","INPUT_SPECIAL_ABILITY_PC|K|KEY_CAPITAL","INPUT_CELLPHONE_UP|K|KEY_UP","INPUT_CELLPHONE_DOWN|K|KEY_DOWN","INPUT_CELLPHONE_LEFT|K|KEY_LEFT","INPUT_CELLPHONE_RIGHT|K|KEY_RIGHT","INPUT_CELLPHONE_SELECT|K|KEY_RETURN","INPUT_CELLPHONE_SELECT|B|MOUSE_LEFT","INPUT_CELLPHONE_CANCEL|K|KEY_BACK","INPUT_CELLPHONE_CANCEL|B|MOUSE_RIGHT","INPUT_CELLPHONE_OPTION|K|KEY_DELETE","INPUT_CELLPHONE_EXTRA_OPTION|K|KEY_SPACE","INPUT_CELLPHONE_CAMERA_FOCUS_LOCK|K|KEY_L","INPUT_CELLPHONE_CAMERA_GRID|K|KEY_G","INPUT_CELLPHONE_CAMERA_SELFIE|B|MOUSE_MIDDLE","INPUT_CELLPHONE_CAMERA_SELFIE|K|KEY_E","INPUT_CELLPHONE_CAMERA_DOF|K|KEY_F","INPUT_CELLPHONE_CAMERA_EXPRESSION|K|KEY_X","INPUT_CELLPHONE_EXTRA_OPTION|B|MOUSE_MIDDLE","INPUT_CELLPHONE_SCROLL_BACKWARD|W|IOM_WHEEL_UP","INPUT_CELLPHONE_SCROLL_FORWARD|W|IOM_WHEEL_DOWN","INPUT_MP_TEXT_CHAT_ALL|K|KEY_T","INPUT_MP_TEXT_CHAT_TEAM|K|KEY_Y","INPUT_PUSH_TO_TALK|K|KEY_N","INPUT_VEH_DRIVE_LOOK|B|MOUSE_LEFT","INPUT_VEH_DRIVE_LOOK2|B|MOUSE_RIGHT","INPUT_VEH_FLY_ATTACK2|K|KEY_SPACE","INPUT_VEH_FLY_ATTACK2|B|MOUSE_RIGHT","INPUT_SPECIAL_ABILITY_SECONDARY|K|KEY_B","INPUT_FRONTEND_PAUSE|K|KEY_P","INPUT_VEH_FLY_ATTACK_CAMERA|K|KEY_INSERT","INPUT_VEH_MOUSE_CONTROL_OVERRIDE|B|MOUSE_LEFT","INPUT_VEH_FLY_MOUSE_CONTROL_OVERRIDE|B|MOUSE_LEFT","INPUT_VEH_SUB_MOUSE_CONTROL_OVERRIDE|B|MOUSE_LEFT","INPUT_VEH_NEXT_RADIO_TRACK|K|KEY_PLUS","INPUT_VEH_PREV_RADIO_TRACK|K|KEY_MINUS","INPUT_FRONTEND_SOCIAL_CLUB_SECONDARY|K|KEY_HOME","INPUT_VEH_HYDRAULICS_CONTROL_TOGGLE|K|KEY_X","INPUT_VEH_BIKE_WINGS|K|KEY_X","INPUT_VEH_TRANSFORM|K|KEY_X","INPUT_VEH_MELEE_HOLD|K|KEY_X","INPUT_VEH_CAR_JUMP|K|KEY_E","INPUT_VEH_ROCKET_BOOST|K|KEY_E","INPUT_VEH_PARACHUTE|K|KEY_SPACE","INPUT_VEH_MELEE_RIGHT|B|MOUSE_RIGHT","INPUT_VEH_MELEE_LEFT|B|MOUSE_LEFT","INPUT_VEH_FLY_BOMB_BAY|K|KEY_E","INPUT_VEH_FLY_COUNTER|K|KEY_E","INPUT_EAT_SNACK|K|KEY_C","INPUT_USE_ARMOR|K|KEY_V","INPUT_VEH_SHIFT_GEAR_UP|K|KEY_RSHIFT","INPUT_VEH_SHIFT_GEAR_DOWN|K|KEY_RCONTROL","INPUT_CREATOR_SWITCH_CAMERA|K|KEY_TAB","INPUT_CREATOR_TOGGLE_ORBIT_CAMERA|B|MOUSE_RIGHT","INPUT_CREATOR_CAMERA_DECREASE|K|KEY_X","INPUT_CREATOR_CAMERA_INCREASE|K|KEY_C","INPUT_CREATOR_MENU_ACCEPT|K|KEY_RETURN","INPUT_CREATOR_MENU_CANCEL|K|KEY_BACK","INPUT_CREATOR_FAST_ADJUST|K|KEY_LCONTROL","INPUT_CREATOR_FINE_ADJUST|K|KEY_LMENU","INPUT_CREATOR_FAST_ZOOM|K|KEY_LSHIFT","INPUT_CREATOR_LIST|K|KEY_SPACE","INPUT_CREATOR_MENU_DELETE|K|KEY_DELETE","INPUT_CREATOR_ALT_MENU_ENTRY|K|KEY_SPACE","INPUT_CREATOR_WARP_AND_EDIT|K|KEY_SPACE","INPUT_CREATOR_TAB_LEFT|K|KEY_Q","INPUT_CREATOR_TAB_RIGHT|K|KEY_E","INPUT_CREATOR_ROTATE_LEFT|K|KEY_Q","INPUT_CREATOR_ROTATE_RIGHT|K|KEY_E","INPUT_CREATOR_FOV_INCREASE|K|KEY_Q","INPUT_CREATOR_FOV_DECREASE|K|KEY_E","INPUT_CREATOR_EXTRA_OPTIONS1|K|KEY_LCONTROL","INPUT_CREATOR_CONTEXT_MENU|K|KEY_F","INPUT_CREATOR_MENU_UP|K|KEY_UP","INPUT_CREATOR_MENU_DOWN|K|KEY_DOWN","INPUT_CREATOR_ADJUST_LEFT|K|KEY_LEFT","INPUT_CREATOR_ADJUST_RIGHT|K|KEY_RIGHT","INPUT_CREATOR_RESET_FOV|K|KEY_TAB","INPUT_CREATOR_ENTITY_RAISE|K|KEY_R","INPUT_CREATOR_ENTITY_LOWER|K|KEY_F","INPUT_CREATOR_TOGGLE_DESCRIPTIONS|K|KEY_M","INPUT_CREATOR_MENU|K|KEY_M"];

const SOURCE_FROM_TOKEN = { K: 'IOMS_KEYBOARD', B: 'IOMS_MOUSE_BUTTON', W: 'IOMS_MOUSE_WHEEL' };

function createDefaultMeta(records) {
  const mappings = records.map((record) => {
    const [input, sourceToken, parameter] = record.split('|');
    return `<Item><Input>${input}</Input><Source>${SOURCE_FROM_TOKEN[sourceToken]}</Source><Parameters><Item>${parameter}</Item></Parameters></Item>`;
  }).join('');
  return `<?xml version="1.0" encoding="UTF-8"?><rage__ControlInput__ControlSettings><Mappings>${mappings}</Mappings></rage__ControlInput__ControlSettings>`;
}

const PROFILE_STORE_KEY = 'keyforge-profiles-v2';
const DEFAULT_MAPPING_COUNT = FULL_MAPPING_DATA.length;
const baseProfile = parseControlMeta(createDefaultMeta(FULL_MAPPING_DATA));
const restoredProfiles = readProfileStore();
const profiles = restoredProfiles?.profiles?.size ? restoredProfiles.profiles : new Map([['default', { name: 'Default controls', profile: baseProfile }]]);
let activeProfileId = restoredProfiles && profiles.has(restoredProfiles.activeProfileId) ? restoredProfiles.activeProfileId : profiles.keys().next().value;
let profile = profiles.get(activeProfileId).profile;
let selectedOrder = allMappingsFor(profile)[0].order;
let editing = false;
let advancedMode = true;
let categoryValue = 'all';

const bindList = document.querySelector('#bindList');
const searchInput = document.querySelector('#searchInput');
const categoryFilter = document.querySelector('#categoryFilter');
const advancedModeInput = document.querySelector('#advancedMode');

function parseControlMeta(content) {
  const xml = extractControlMetaXml(content);
  const documentRoot = new DOMParser().parseFromString(xml, 'application/xml');
  if (documentRoot.querySelector('parsererror') || documentRoot.documentElement.nodeName !== 'rage__ControlInput__ControlSettings') throw new Error('This is not a GTA V default.meta control file.');
  const mappings = documentRoot.querySelector('Mappings');
  if (!mappings) throw new Error('The file does not contain a Mappings section.');

  const actions = new Map();
  let order = 0;
  for (const item of Array.from(mappings.children).filter((child) => child.tagName === 'Item')) {
    const input = childText(item, 'Input');
    const source = childText(item, 'Source');
    const parameters = Array.from(item.children).find((child) => child.tagName === 'Parameters');
    const parameter = parameters ? childText(parameters, 'Item') : '';
    if (!input || !source || !parameter) continue;
    if (!actions.has(input)) actions.set(input, createAction(input));
    actions.get(input).entries.push({ source, parameter, order: order++, removed: false });
  }
  if (!actions.size) throw new Error('No editable mappings were found.');
  return { actions, nextOrder: order };
}

function extractControlMetaXml(content) {
  const rootName = 'rage__ControlInput__ControlSettings';
  const extractRoot = (value) => {
    const start = value.indexOf(`<${rootName}`);
    const closingTag = `</${rootName}>`;
    const end = value.lastIndexOf(closingTag);
    return start >= 0 && end >= start ? value.slice(start, end + closingTag.length) : null;
  };

  const directXml = extractRoot(content);
  if (directXml) return directXml;

  const htmlDocument = new DOMParser().parseFromString(content, 'text/html');
  return extractRoot(htmlDocument.body.textContent || '') || content;
}

function childText(parent, name) { return Array.from(parent.children).find((child) => child.tagName === name)?.textContent.trim() || ''; }
function createAction(id) { const category = categoryFor(id); return { id, name: actionName(id), category, description: descriptionFor(id, category), entries: [] }; }

function categoryFor(id) {
  if (id.startsWith('INPUT_CREATOR')) return 'Creator';
  if (id.startsWith('INPUT_VEH_FLY')) return 'Aircraft';
  if (id.startsWith('INPUT_VEH_SUB')) return 'Submarine';
  if (id.startsWith('INPUT_VEH')) return 'Driving';
  if (id.startsWith('INPUT_PARACHUTE')) return 'Parachuting';
  if (id.startsWith('INPUT_CELLPHONE') || id === 'INPUT_PHONE') return 'Phone';
  if (id.startsWith('INPUT_REPLAY')) return 'Replay';
  if (id.startsWith('INPUT_MP_') || id === 'INPUT_PUSH_TO_TALK') return 'Multiplayer';
  if (id.includes('WEAPON') || id.startsWith('INPUT_RELOAD') || id.startsWith('INPUT_DETONATE')) return 'Weapons';
  if (id.startsWith('INPUT_MELEE')) return 'Combat';
  if (id.startsWith('INPUT_FRONTEND') || id.startsWith('INPUT_MAP')) return 'Interface';
  if (id.includes('MOVE') || ['INPUT_SPRINT', 'INPUT_JUMP', 'INPUT_DUCK', 'INPUT_COVER', 'INPUT_CONTEXT', 'INPUT_ENTER'].includes(id)) return 'On foot';
  return 'General';
}

function actionName(id) {
  const labels = { INPUT_VEH_ACCELERATE: 'Accelerate', INPUT_VEH_BRAKE: 'Brake / reverse', INPUT_VEH_HANDBRAKE: 'Handbrake', INPUT_SELECT_WEAPON: 'Weapon wheel', INPUT_FRONTEND_PAUSE: 'Pause menu', INPUT_MOVE_UP_ONLY: 'Move forward', INPUT_MOVE_DOWN_ONLY: 'Move backward', INPUT_MOVE_LEFT_ONLY: 'Move left', INPUT_MOVE_RIGHT_ONLY: 'Move right', INPUT_VEH_HEADLIGHT: 'Headlights', INPUT_PHONE: 'Open phone', INPUT_VEH_EXIT: 'Exit vehicle' };
  return labels[id] || id.replace(/^INPUT_/, '').replaceAll('_', ' ').toLowerCase().replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function descriptionFor(id, category) {
  const descriptions = { INPUT_VEH_ACCELERATE: 'Increases speed while operating a vehicle.', INPUT_VEH_BRAKE: 'Slows, stops, or reverses the current vehicle.', INPUT_VEH_HANDBRAKE: 'Engages the vehicle handbrake.', INPUT_SELECT_WEAPON: 'Opens the weapon selection wheel.', INPUT_PHONE: 'Opens the in-game phone.', INPUT_FRONTEND_PAUSE: 'Opens the pause menu.' };
  return descriptions[id] || `${actionName(id)} is a ${category.toLowerCase()} control defined by GTA V.`;
}

function allMappings() { return [...profile.actions.values()].flatMap((action) => action.entries.map((entry) => ({ action, entry }))).sort((left, right) => left.entry.order - right.entry.order); }
function selectedMapping() { return allMappings().find(({ entry }) => entry.order === selectedOrder) || allMappings()[0]; }
function displayKey(parameter) { return KEY_LABELS[parameter] || parameter.replace(/^KEY_/, '').replace(/^IOM_/, '').replaceAll('_', ' '); }
function visibleMappings() {
  const query = searchInput.value.toLowerCase().trim();
  return allMappings().filter(({ action, entry }) => {
    const matchesCategory = categoryValue === 'all' || action.category === categoryValue;
    const inMode = advancedMode || BASIC_CATEGORIES.has(action.category);
    const haystack = `${action.name} ${action.id} ${action.category} ${entry.source} ${entry.parameter}`.toLowerCase();
    return matchesCategory && inMode && haystack.includes(query);
  });
}

function renderCategoryFilter() {
  const categories = [...new Set(allMappings().map(({ action }) => action.category))].filter((category) => advancedMode || BASIC_CATEGORIES.has(category)).sort();
  if (!categories.includes(categoryValue)) categoryValue = 'all';
  categoryFilter.innerHTML = `<option value="all">All categories (${allMappings().length})</option>${categories.map((category) => `<option value="${category}">${category} (${allMappings().filter(({ action }) => action.category === category).length})</option>`).join('')}`;
  categoryFilter.value = categoryValue;
}

function renderList() {
  renderCategoryFilter();
  bindList.innerHTML = visibleMappings().map(({ action, entry }) => `<article class="bind-row ${entry.order === selectedOrder ? 'selected' : ''} ${entry.removed ? 'disabled' : ''}" data-order="${entry.order}">
    <div class="action-cell"><span><strong>${action.name}</strong><small>${action.category} · <code>${action.id.replace('INPUT_', '')}</code>${entry.removed ? '<i class="state-label"> · disabled</i>' : ''}</small></span></div>
    <button class="keycap ${entry.removed ? 'empty' : ''}" title="${entry.parameter}">${entry.removed ? 'Disabled' : displayKey(entry.parameter)}</button>
    <span class="source-label">${SOURCE_LABELS[entry.source] || entry.source}</span>
  </article>`).join('') || '<p class="empty-list">No mappings match this view.</p>';
}

function renderInspector() {
  const mapping = selectedMapping();
  if (!mapping) return;
  selectedOrder = mapping.entry.order;
  const { action, entry } = mapping;
  document.querySelector('#detailTitle').textContent = action.name;
  document.querySelector('#detailCategory').textContent = `${action.category} · ${action.id}`;
  document.querySelector('#detailDescription').textContent = action.description;
  const keyButton = document.querySelector('#primaryKey');
  keyButton.innerHTML = `${entry.removed ? 'Disabled' : displayKey(entry.parameter)} <small>${SOURCE_LABELS[entry.source] || entry.source}</small>`;
  keyButton.classList.toggle('empty', entry.removed);
  keyButton.classList.remove('capturing');
  document.querySelector('#sourceSelect').value = entry.source;
  document.querySelector('#rawInputCode').value = entry.parameter;
  document.querySelector('#disableToggle').checked = entry.removed;
  document.querySelectorAll('.advanced-only').forEach((element) => { element.hidden = !advancedMode; });
  renderConflicts(mapping);
}

function renderConflicts(mapping) {
  const conflicts = allMappings().filter(({ entry }) => entry.order !== mapping.entry.order && !entry.removed && entry.source === mapping.entry.source && entry.parameter === mapping.entry.parameter).map(({ action }) => action.name);
  const unique = [...new Set(conflicts)];
  document.querySelector('#conflictTitle').textContent = unique.length ? `${unique.length} shared mapping${unique.length > 1 ? 's' : ''}` : 'Conflict check clear';
  document.querySelector('#conflictMessage').textContent = unique.length ? `Also used by ${unique.join(', ')}. Shared inputs can be intentional.` : 'No active mapping shares this exact input.';
}

function renderProfiles() {
  document.querySelector('#profileList').innerHTML = [...profiles.entries()].map(([id, item]) => `<div class="profile-row ${id === activeProfileId ? 'active' : ''}"><button class="profile-item" data-profile-id="${id}"><span class="profile-symbol">${id === activeProfileId ? '◆' : '◇'}</span><span>${escapeHtml(item.name)}</span><b>${allMappingsFor(item.profile).length}</b></button><div class="profile-tools"><button data-profile-action="rename" data-profile-id="${id}" title="Rename profile">✎</button><button data-profile-action="duplicate" data-profile-id="${id}" title="Duplicate profile">⧉</button><button data-profile-action="delete" data-profile-id="${id}" title="Delete profile" ${profiles.size === 1 ? 'disabled' : ''}>×</button></div></div>`).join('');
}

function renderMappingHealth() {
  const mappingHealth = document.querySelector('#mappingHealth');
  const missingCount = Math.max(0, DEFAULT_MAPPING_COUNT - allMappings().length);
  mappingHealth.hidden = missingCount === 0;
  mappingHealth.textContent = missingCount === 1
    ? '1 mapping is missing from the 210-entry default.'
    : `${missingCount} mappings are missing from the 210-entry default.`;
}

function allMappingsFor(profileState) { return [...profileState.actions.values()].flatMap((action) => action.entries); }
function selectMapping(order) { selectedOrder = Number(order); renderList(); renderInspector(); }
function showToast(message) { const toast = document.querySelector('#toast'); toast.textContent = message; toast.classList.add('show'); window.clearTimeout(showToast.timeout); showToast.timeout = window.setTimeout(() => toast.classList.remove('show'), 3000); }

function armCapture() { editing = true; const button = document.querySelector('#primaryKey'); button.textContent = 'Press a key, click, or scroll…'; button.classList.add('capturing'); }
function assignInput(source, parameter) { const mapping = selectedMapping(); mapping.entry.source = source; mapping.entry.parameter = parameter; mapping.entry.removed = false; editing = false; renderList(); renderInspector(); showToast(`${mapping.action.name} updated to ${displayKey(parameter)}.`); }
function finishInputCapture(source, parameter) { if (!editing) return false; assignInput(source, parameter); return true; }

function rageKeyFromEvent(event) {
  const codes = { Space: 'KEY_SPACE', Enter: 'KEY_RETURN', Backspace: 'KEY_BACK', Tab: 'KEY_TAB', Escape: 'KEY_ESCAPE', Delete: 'KEY_DELETE', Insert: 'KEY_INSERT', Home: 'KEY_HOME', PageUp: 'KEY_PAGEUP', PageDown: 'KEY_PAGEDOWN', ArrowUp: 'KEY_UP', ArrowDown: 'KEY_DOWN', ArrowLeft: 'KEY_LEFT', ArrowRight: 'KEY_RIGHT', ShiftLeft: 'KEY_LSHIFT', ShiftRight: 'KEY_RSHIFT', ControlLeft: 'KEY_LCONTROL', ControlRight: 'KEY_RCONTROL', AltLeft: 'KEY_LMENU', AltRight: 'KEY_RMENU', CapsLock: 'KEY_CAPITAL', BracketLeft: 'KEY_LBRACKET', BracketRight: 'KEY_RBRACKET', Comma: 'KEY_COMMA', Period: 'KEY_PERIOD', Minus: 'KEY_MINUS', Equal: 'KEY_PLUS' };
  if (codes[event.code]) return codes[event.code];
  if (/^Key[A-Z]$/.test(event.code)) return `KEY_${event.code.slice(3)}`;
  if (/^Digit[0-9]$/.test(event.code)) return `KEY_${event.code.slice(5)}`;
  if (/^F([1-9]|1[0-2])$/.test(event.code)) return `KEY_${event.code}`;
  if (/^Numpad[0-9]$/.test(event.code)) return `KEY_NUMPAD${event.code.slice(6)}`;
  return null;
}

function serializeDefaultMeta() {
  const mappings = allMappings().filter(({ entry }) => !entry.removed).map(({ action, entry }) => `\t\t<Item>\n\t\t\t<Input>${escapeXml(action.id)}</Input>\n\t\t\t<Source>${escapeXml(entry.source)}</Source>\n\t\t\t<Parameters>\n\t\t\t\t<Item>${escapeXml(entry.parameter)}</Item>\n\t\t\t</Parameters>\n\t\t</Item>`).join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n\n<rage__ControlInput__ControlSettings>\n\t<Mappings>\n${mappings}\n\t</Mappings>\n</rage__ControlInput__ControlSettings>\n`;
}

function escapeXml(value) { return String(value).replace(/[<>&'\"]/g, (character) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[character]); }
function escapeHtml(value) { return escapeXml(value); }
function cloneProfile(source) { return { nextOrder: source.nextOrder, actions: new Map([...source.actions.entries()].map(([id, action]) => [id, { ...action, entries: action.entries.map((entry) => ({ ...entry })) }])) }; }

function serializeProfile(profileState) {
  return { nextOrder: profileState.nextOrder, actions: [...profileState.actions.entries()].map(([id, action]) => [id, { ...action, entries: action.entries.map((entry) => ({ ...entry })) }]) };
}

function hydrateProfile(savedProfile) {
  return { nextOrder: savedProfile.nextOrder, actions: new Map(savedProfile.actions.map(([id, action]) => [id, { ...action, entries: action.entries.map((entry) => ({ ...entry })) }])) };
}

function readProfileStore() {
  try {
    const saved = JSON.parse(localStorage.getItem(PROFILE_STORE_KEY));
    if (!saved?.profiles?.length) return null;
    return { activeProfileId: saved.activeProfileId, profiles: new Map(saved.profiles.map(([id, item]) => [id, { name: item.name, profile: hydrateProfile(item.profile) }])) };
  } catch { return null; }
}

function persistProfiles() {
  const saved = { activeProfileId, profiles: [...profiles.entries()].map(([id, item]) => [id, { name: item.name, profile: serializeProfile(item.profile) }]) };
  localStorage.setItem(PROFILE_STORE_KEY, JSON.stringify(saved));
}

function updateProfileTitle() { document.querySelector('#profileTitle').textContent = profiles.get(activeProfileId).name; }
function newProfileId() { return `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`; }

function createShareCode() {
  const payload = {
    format: 'KeyForge layout',
    version: 1,
    name: profiles.get(activeProfileId).name,
    mappings: allMappings().map(({ action, entry }) => [action.id, entry.source, entry.parameter, entry.removed ? 1 : 0])
  };
  const bytes = new TextEncoder().encode(JSON.stringify(payload));
  let binary = '';
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return `KF1.${btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '')}`;
}

function parseShareCode(code) {
  const encoded = code.trim();
  if (!encoded.startsWith('KF1.') || encoded.length > 100000) throw new Error('This is not a valid KeyForge share code.');
  const base64 = encoded.slice(4).replace(/-/g, '+').replace(/_/g, '/');
  if (!/^[A-Za-z0-9+/]*$/.test(base64)) throw new Error('This share code contains unsupported characters.');
  let payload;
  try {
    const padded = base64.padEnd(Math.ceil(base64.length / 4) * 4, '=');
    const binary = atob(padded);
    const bytes = Uint8Array.from(binary, (character) => character.charCodeAt(0));
    payload = JSON.parse(new TextDecoder().decode(bytes));
  } catch { throw new Error('This share code could not be read.'); }

  const validSources = new Set(Object.keys(SOURCE_LABELS));
  if (payload?.format !== 'KeyForge layout' || payload.version !== 1 || !Array.isArray(payload.mappings) || !payload.mappings.length || payload.mappings.length > 500) throw new Error('This share code has an unsupported layout format.');

  const actions = new Map();
  let order = 0;
  for (const mapping of payload.mappings) {
    const [id, source, parameter, removed] = mapping;
    if (typeof id !== 'string' || !/^INPUT_[A-Z0-9_]+$/.test(id) || !validSources.has(source) || typeof parameter !== 'string' || !/^(KEY_|MOUSE_|IOM_WHEEL_)[A-Z0-9_]+$/.test(parameter)) throw new Error('This share code contains an invalid mapping.');
    if (!actions.has(id)) actions.set(id, createAction(id));
    actions.get(id).entries.push({ source, parameter, order: order++, removed: Boolean(removed) });
  }
  return { name: String(payload.name || 'Imported layout').trim().slice(0, 48) || 'Imported layout', profile: { actions, nextOrder: order } };
}

function openShareDialog() {
  const dialog = document.querySelector('#shareDialog');
  const input = document.querySelector('#shareCodeInput');
  input.value = createShareCode();
  dialog.showModal();
  window.setTimeout(() => { input.focus(); input.select(); }, 0);
}

async function copyShareCode() {
  const code = document.querySelector('#shareCodeInput').value.trim();
  if (!code) return showToast('Generate or paste a share code first.');
  await window.keyforge.copyShareCode(code);
  showToast('Share code copied.');
}

async function pasteShareCode() {
  const result = await window.keyforge.readShareCode();
  if (result.code) document.querySelector('#shareCodeInput').value = result.code;
}

function importShareCode(event) {
  event.preventDefault();
  try {
    const imported = parseShareCode(document.querySelector('#shareCodeInput').value);
    const id = newProfileId();
    profiles.set(id, { name: imported.name, profile: imported.profile });
    document.querySelector('#shareDialog').close();
    activateProfile(id);
    showToast(`Imported ${imported.name}.`);
  } catch (error) { showToast(error.message); }
}

function requestProfileName(title, message, value, submitLabel) {
  const dialog = document.querySelector('#profileDialog');
  const form = document.querySelector('#profileDialogForm');
  const input = document.querySelector('#profileNameInput');
  document.querySelector('#profileDialogTitle').textContent = title;
  document.querySelector('#profileDialogMessage').textContent = message;
  document.querySelector('#profileDialogSubmit').textContent = submitLabel;
  input.value = value;
  return new Promise((resolve) => {
    const finish = (result) => {
      form.removeEventListener('submit', submit);
      dialog.removeEventListener('cancel', cancel);
      document.querySelector('#profileDialogCancel').removeEventListener('click', cancel);
      dialog.close();
      resolve(result);
    };
    const submit = (event) => { event.preventDefault(); finish(input.value.trim() || null); };
    const cancel = (event) => { event?.preventDefault(); finish(null); };
    form.addEventListener('submit', submit);
    dialog.addEventListener('cancel', cancel);
    document.querySelector('#profileDialogCancel').addEventListener('click', cancel);
    dialog.showModal();
    window.setTimeout(() => { input.focus(); input.select(); }, 0);
  });
}

function requestDeleteConfirmation(profileName) {
  const dialog = document.querySelector('#deleteProfileDialog');
  document.querySelector('#deleteProfileMessage').textContent = `Delete “${profileName}” and its saved mappings? This cannot be undone.`;
  return new Promise((resolve) => {
    const close = () => { dialog.removeEventListener('close', close); resolve(dialog.returnValue === 'confirm'); };
    dialog.addEventListener('close', close);
    dialog.showModal();
  });
}

function requestImportMode(fileName) {
  const dialog = document.querySelector('#importMetaDialog');
  document.querySelector('#importMetaMessage').textContent = `How should ${fileName} be added? Replacing updates the active profile; creating a profile keeps it unchanged.`;
  return new Promise((resolve) => {
    const close = () => {
      dialog.removeEventListener('close', close);
      resolve(dialog.returnValue || 'cancel');
    };
    dialog.addEventListener('close', close);
    dialog.showModal();
  });
}

function activateProfile(id) {
  activeProfileId = id;
  profile = profiles.get(id).profile;
  selectedOrder = allMappings()[0].entry.order;
  renderAll();
  showToast(`${profiles.get(id).name} opened.`);
}

async function createProfile(sourceProfile = profile, defaultName = 'New profile') {
  const name = await requestProfileName('Create profile', 'Start with a copy of the active mapping set.', defaultName, 'Create profile');
  if (!name) return;
  const id = newProfileId();
  profiles.set(id, { name, profile: cloneProfile(sourceProfile) });
  activateProfile(id);
}

async function renameProfile(id) {
  const item = profiles.get(id);
  const name = await requestProfileName('Rename profile', 'This name is used in the profile list and OpenIV package metadata.', item.name, 'Rename profile');
  if (!name) return;
  item.name = name;
  renderAll();
  showToast('Profile renamed.');
}

async function duplicateProfile(id) { await createProfile(profiles.get(id).profile, `${profiles.get(id).name} copy`); }

async function deleteProfile(id) {
  if (profiles.size === 1) return;
  const item = profiles.get(id);
  if (!await requestDeleteConfirmation(item.name)) return;
  profiles.delete(id);
  if (activeProfileId === id) activateProfile(profiles.keys().next().value);
  else renderAll();
  showToast('Profile deleted.');
}

async function openMeta() {
  try {
    const result = await window.keyforge.openControlFile();
    if (result.canceled) return;
    const importedProfile = parseControlMeta(result.content);
    const fileName = result.filePath.split(/[\\/]/).pop();
    const importMode = await requestImportMode(fileName);
    if (importMode === 'cancel') return;
    if (importMode === 'new-profile') {
      const id = newProfileId();
      const name = `Imported ${fileName.replace(/\.(meta|xml|txt|html)$/i, '')}`.slice(0, 48);
      profiles.set(id, { name, profile: importedProfile });
      activeProfileId = id;
    } else {
      profiles.set(activeProfileId, { ...profiles.get(activeProfileId), profile: importedProfile });
    }
    profile = profiles.get(activeProfileId).profile;
    selectedOrder = allMappingsFor(profile)[0].order;
    document.querySelector('#fileSummary').textContent = `Loaded ${allMappings().length} editable mappings across ${profile.actions.size} GTA actions from ${result.filePath.split(/[\\/]/).pop()}.`;
    renderAll(); showToast(importMode === 'new-profile' ? 'default.meta imported as a new profile.' : 'Active profile replaced from default.meta.');
  } catch (error) { showToast(error.message); }
}

async function saveMeta() { const result = await window.keyforge.saveControlFile(serializeDefaultMeta()); if (!result.canceled) showToast(`default.meta exported: ${result.filePath.split(/[\\/]/).pop()}`); }
async function exportDefaultBackup() {
  const result = await window.keyforge.saveControlFile(createDefaultMeta(FULL_MAPPING_DATA));
  if (!result.canceled) showToast(`Original default.meta backup exported: ${result.filePath.split(/[\\/]/).pop()}`);
}
async function exportDefaultOiv() {
  const result = await window.keyforge.exportOiv({ xml: createDefaultMeta(FULL_MAPPING_DATA), profileName: 'Default controls' });
  if (!result.canceled) showToast(`Default controls package built: ${result.filePath.split(/[\\/]/).pop()}`);
}
async function exportOiv() {
  const result = await window.keyforge.exportOiv({ xml: serializeDefaultMeta(), profileName: profiles.get(activeProfileId).name });
  if (!result.canceled) showToast(`OpenIV package built: ${result.filePath.split(/[\\/]/).pop()}`);
}

function renderAll() { updateProfileTitle(); renderList(); renderInspector(); renderProfiles(); renderMappingHealth(); persistProfiles(); }

bindList.addEventListener('click', (event) => { const row = event.target.closest('.bind-row'); if (row) selectMapping(row.dataset.order); });
searchInput.addEventListener('input', renderList);
categoryFilter.addEventListener('change', () => { categoryValue = categoryFilter.value; renderList(); });
advancedModeInput.addEventListener('change', () => { advancedMode = advancedModeInput.checked; renderAll(); });
document.querySelector('#primaryKey').addEventListener('click', armCapture);
document.querySelector('#sourceSelect').addEventListener('change', (event) => {
  const defaults = { IOMS_KEYBOARD: 'KEY_SPACE', IOMS_MOUSE_BUTTON: 'MOUSE_LEFT', IOMS_MOUSE_WHEEL: 'IOM_WHEEL_UP' };
  assignInput(event.target.value, defaults[event.target.value]);
  showToast('Choose the input field to capture a different value.');
});
document.querySelector('#applyRawCode').addEventListener('click', () => { if (!advancedMode) return showToast('Enable Advanced mode to use raw RAGE input codes.'); const code = document.querySelector('#rawInputCode').value.trim().toUpperCase(); if (!/^(KEY_|MOUSE_|IOM_WHEEL_)/.test(code)) return showToast('Enter a KEY_*, MOUSE_*, or IOM_WHEEL_* RAGE input code.'); const source = code.startsWith('MOUSE_') ? 'IOMS_MOUSE_BUTTON' : code.startsWith('IOM_WHEEL_') ? 'IOMS_MOUSE_WHEEL' : 'IOMS_KEYBOARD'; assignInput(source, code); });
window.addEventListener('keydown', (event) => { if (!editing && (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 's') { event.preventDefault(); saveMeta(); return; } if (!editing && (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'o') { event.preventDefault(); openMeta(); return; } if (!editing) return; const parameter = rageKeyFromEvent(event); if (!parameter) return showToast('Use Advanced mode to enter this RAGE code directly.'); event.preventDefault(); finishInputCapture('IOMS_KEYBOARD', parameter); });
window.addEventListener('mousedown', (event) => { const parameters = { 0: 'MOUSE_LEFT', 1: 'MOUSE_MIDDLE', 2: 'MOUSE_RIGHT' }; if (parameters[event.button] && finishInputCapture('IOMS_MOUSE_BUTTON', parameters[event.button])) event.preventDefault(); });
window.addEventListener('wheel', (event) => { if (editing && finishInputCapture('IOMS_MOUSE_WHEEL', event.deltaY < 0 ? 'IOM_WHEEL_UP' : 'IOM_WHEEL_DOWN')) event.preventDefault(); }, { passive: false });
window.addEventListener('contextmenu', (event) => { if (editing) event.preventDefault(); });
document.querySelector('#clearPrimary').addEventListener('click', () => { selectedMapping().entry.removed = true; editing = false; renderAll(); showToast('Mapping disabled for export.'); });
document.querySelector('#disableToggle').addEventListener('change', (event) => { selectedMapping().entry.removed = event.target.checked; renderAll(); });
document.querySelector('#resetAction').addEventListener('click', () => { selectedMapping().entry.removed = false; renderAll(); showToast('Imported mapping restored.'); });
document.querySelector('#saveButton')?.addEventListener('click', saveMeta);
document.querySelectorAll('#openFileButton, #openFileButtonAlt').forEach((button) => button.addEventListener('click', openMeta));
document.querySelectorAll('#saveXmlButton, #saveXmlButtonAlt').forEach((button) => button.addEventListener('click', saveMeta));
document.querySelector('#exportDefaultBackupButton').addEventListener('click', exportDefaultBackup);
document.querySelector('#exportDefaultOivButton').addEventListener('click', exportDefaultOiv);
document.querySelector('#shareLayoutButton').addEventListener('click', openShareDialog);
document.querySelector('#helpButton').addEventListener('click', () => document.querySelector('#helpDialog').showModal());
document.querySelector('#shareCodeForm').addEventListener('submit', importShareCode);
document.querySelector('#copyShareCode').addEventListener('click', () => void copyShareCode());
document.querySelector('#pasteShareCode').addEventListener('click', () => void pasteShareCode());
document.querySelector('#shareDialogCancel').addEventListener('click', () => document.querySelector('#shareDialog').close());
document.querySelector('#exportOivButton').addEventListener('click', exportOiv);
const fileMenu = document.querySelector('.menu-dropdown');
fileMenu.addEventListener('click', (event) => { if (event.target.closest('button')) fileMenu.removeAttribute('open'); });
document.addEventListener('click', (event) => { if (!fileMenu.contains(event.target)) fileMenu.removeAttribute('open'); });
document.querySelectorAll('#shareDialog, #helpDialog').forEach((dialog) => dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); }));
document.querySelector('#profileList').addEventListener('click', (event) => {
  const control = event.target.closest('[data-profile-action]');
  if (control && !control.disabled) {
    const { profileAction, profileId } = control.dataset;
    if (profileAction === 'rename') void renameProfile(profileId);
    if (profileAction === 'duplicate') void duplicateProfile(profileId);
    if (profileAction === 'delete') void deleteProfile(profileId);
    return;
  }
  const profileButton = event.target.closest('[data-profile-id]');
  if (profileButton && profileButton.dataset.profileId !== activeProfileId) activateProfile(profileButton.dataset.profileId);
});
document.querySelector('#newProfileButton').addEventListener('click', () => void createProfile());

renderAll();
