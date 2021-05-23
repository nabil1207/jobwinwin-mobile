export class Helper {

    /**
     * fetch data from json file
     * @param cb
     * @param path
     */
    static fetchDataJson(cb: any, path: string): any {
        const req = new XMLHttpRequest();
        req.open('GET', path);
        req.onload = () => {
            cb(JSON.parse(req.response));
        };
        req.send();
    }

    /**
     * get type
     * @param p
     */
    static getType(p) {
        if (Array.isArray(p)) return 'array';
        else if (typeof p == 'string') return 'string';
        else if (typeof p == 'number') return 'number';
        else if (p != null && typeof p == 'object') return 'object';
        else return 'other';
    }

    /**
     * remove element from array
     * @param array 
     * @param element 
     * @param value 
     */
    static removeElement(array: any[], element: string, value: string): void {
        const index = array.findIndex(x => x[element].toString() === value);
        if (index >= 0) {
            array.splice(index, 1);
        }
    }

    /**
     * calcule percentage
     * @param value 
     * @param pers 
     * @param skip 
     */
    static calculePercentage(value, percentage, skip) {
        Object.keys(value).forEach(key => {
            // console.log(value[key]);
            if (value[key]) {
                switch (Helper.getType(value[key])) {
                    case 'array':
                        // console.log('array calc')
                        if (Helper.getType(value[key][0]) === 'object') {
                            for (let item of Object.keys(value[key][0])) {
                                if (value[key][0][item] && (Helper.getType(value[key][0][item]) !== 'array' || (Helper.getType(value[key][0][item]) === 'array' && value[key][0][item].length > 0))) {
                                    percentage += Number(skip);
                                    if (key === 'logo' || key === 'video' || key === 'picture' || key === 'cv')
                                        break;
                                }
                            }
                        } else if (value[key].length > 0) {
                            percentage += Number(skip);
                        }
                        break;
                    case 'object':
                        // console.log('object calc')
                        for (let item of Object.keys(value[key])) {
                            if (value[key][item] && (Helper.getType(value[key][item]) !== 'array' || (Helper.getType(value[key][item]) === 'array' && value[key][item].length > 0))) {
                                percentage += Number(skip);
                                if (key === 'logo' || key === 'video' || key === 'picture' || key === 'cv')
                                    break;
                            }
                        }
                        break;
                    case 'string':
                        percentage += Number(skip);
                        break;
                    case 'number':
                        percentage += Number(skip);
                        break;
                }
            }
        });
        // console.log(percentage);
        return percentage;
    }

    /**
     * class object to json
     * @param properties
     */
    static objectToString(properties, object) {
        let val = {};
        properties.forEach(item => {
            if (object[item]) {
                val[item] = object[item];
            }
        })
        return val;
    }

    static getObjectValues(obj: any | object, properties: string[]): any | object {
        const val = {};
        properties.forEach(item => {
            if (obj[item]) {
                val[item] = obj[item];
            }
        })
        return val;
    }


}