export const serverUrl = {
  local: 'https://localhost:5000',
  alpha: 'https://script-lab-react-server-alpha.azurewebsites.net',
  beta: 'https://script-lab-react-server-beta.azurewebsites.net',
  prod: 'https://script-lab-react-server.azurewebsites.net',
}[getCurrentEnv()];

export const githubAppClientId = {
  local: '210a167954d9ef04b501',
  alpha: 'ad26df7ba62ef691669e',
  beta: 'edb61fe543b382628d68',
  prod: '5db9e6dbe957707a3cb2',
}[getCurrentEnv()];

export const environmentName = {
  local: 'local',
  alpha: 'react-alpha',
  beta: 'react-beta',
  prod: 'react',
}[getCurrentEnv()];

// FIXME Zlatkovsky/Nico:  what are those used for?  They should probably match up with getCurrentEnv's enumerations!
export const editorUrls = {
  local: 'https://localhost:3000',
  'react-alpha': 'https://script-lab-react-alpha.azurewebsites.net',
  'react-beta': 'https://script-lab-react-beta.azurewebsites.net',
  alpha: 'https://bornholm-edge.azurewebsites.net',
  beta: 'https://bornholm-insiders.azurewebsites.net',
  production: 'https://script-lab.azureedge.net',
};

// FIXME Zlatkovsky/Nico: introduce 'prod-direct' and 'staging' environments as well
export function getCurrentEnv(): 'local' | 'alpha' | 'beta' | 'prod' {
  return ({
    'https://localhost:3000': 'local',
    'https://script-lab-react-alpha.azurewebsites.net': 'alpha',
    'https://script-lab-react-beta.azurewebsites.net': 'beta',
    'https://script-lab-react.azurewebsites.net': 'prod',
  } as any)[window.location.origin];
}

export const runnerUrls: { local: string; alpha: string; beta: string; prod: string } = {
  local: 'https://localhost:3200',
  alpha: 'https://script-lab-react-runner-alpha.azurewebsites.net',
  beta: 'https://script-lab-react-runner-beta.azurewebsites.net',
  prod: 'https://script-lab-runner.azureedge.net',
};

export enum PlatformType {
  PC = 'PC',
  OfficeOnline = 'OfficeOnline',
  Mac = 'Mac',
  iOS = 'iOS',
  Android = 'Android',
  Universal = 'Universal',
}

export function getPlatform(): PlatformType {
  return (((window as any).Office &&
    (window as any).Office.context &&
    (window as any).Office.context.platform) ||
    PlatformType.OfficeOnline) as PlatformType;
}

export const allowedEnvs = [
  'local',
  'react-alpha',
  'react-beta',
  'react',
  'alpha',
  'beta',
  'production',
];
