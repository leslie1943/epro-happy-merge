import { listEproProjects } from '../services/publish'
import { setStore, getStore } from '@/utils/localStore';

export function getGitMap() {
    return {
        106: 'epro-mall',
        116: 'epro-dmcc-svc',
        104: 'epro-user-svc',
        103: 'epro-certificate-svc',
        173: 'epro-gateway',
        166: 'epro-job',
        207: 'epro-flyway',
        113: 'epro-message',
        211: 'utility-epro',
        107: 'epro-mall-web',
        213: 'epro-hx-svc',
        214: 'epro-hx-mall',
        117: 'epro-op',
        118: 'epro-op-web',
        112: 'epro-support'
    }
}


export function getRepository() {
    // 直接从localstorage里取值
    if (getStore('epro_repository')) {
        const res = getStore('epro_repository')
        return res;
    }
    // 调用后台接口获取列表信息
    listEproProjects().then(res => {
        const local_repos = []
        res.forEach(item => {
            // filter no-epro projects
            // item.id != 270 &&
            // item.id != 269 &&
            // item.id != 268 &&
            // item.id != 267 &&
            if (item.id != 276 &&
                item.id != 263 &&
                item.id != 206 &&
                item.id != 137 &&
                item.id != 132 &&
                item.id != 130 &&
                item.id != 122 &&
                item.id != 115 &&
                item.id != 108 &&
                item.id != 105
            )
                local_repos.push({
                    id: item.id,
                    value: item.id,
                    name: item.name,
                    label: item.name
                })
        })
        setStore("epro_repository", local_repos);
        return local_repos
    })

    // return [
    //     { value: 103, label: 'epro-certificate-svc' },
    //     { value: 104, label: 'epro-user-svc' },
    //     { value: 106, label: 'epro-mall' },
    //     { value: 107, label: 'epro-mall-web' },
    //     { value: 113, label: 'epro-message' },
    //     { value: 116, label: 'epro-dmcc-svc' },
    //     { value: 166, label: 'epro-job' },
    //     { value: 173, label: 'epro-gateway' },
    //     { value: 207, label: 'epro-flyway' },
    //     { value: 211, label: 'utility-epro' },
    //     { value: 213, label: 'epro-hx-svc' },
    //     { value: 214, label: 'epro-hx-mall' },
    //     { value: 117, label: 'epro-op' },
    //     { value: 118, label: 'epro-op-web' },
    //     { value: 112, label: 'epro-support' },
    // ];
}

export function getGitToken() {
    return [
        { index: 1, val: '苏震', text: '苏震' },
        { index: 2, val: '于超', text: '于超' },
        { index: 3, val: '刘培江', text: '刘培江' },
    ];
}
