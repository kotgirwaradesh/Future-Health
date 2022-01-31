import web3 from './web3';
const address = '0x0D42CF73748DB720dEAaE6b3c3761422212F781c';
const abi =   [
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_adharCardNumber",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_addres",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_phoneNo",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_bloodGroup",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_insuranceCompany",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_emergencyContact",
        "type": "uint256"
      }
    ],
    "name": "addPatientInfo",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "insu_id",
        "type": "uint256"
      }
    ],
    "name": "updateInsuComp",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getTreatmentIds",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "treatmentId",
        "type": "uint256[]"
      },
      {
        "internalType": "string[]",
        "name": "treatmentDate",
        "type": "string[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "pid",
        "type": "uint256"
      }
    ],
    "name": "getTreatmentIdsforDr",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "treatmentId",
        "type": "uint256[]"
      },
      {
        "internalType": "string",
        "name": "precaution",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "pid",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "date",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "reason",
        "type": "string"
      }
    ],
    "name": "raiseEmergency",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "raisedEmergencyDetails",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "emergencyLogID",
        "type": "uint256[]"
      },
      {
        "internalType": "string[]",
        "name": "emergencyDate",
        "type": "string[]"
      },
      {
        "internalType": "string[]",
        "name": "emergencyReason",
        "type": "string[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_adharCardNumber",
        "type": "uint256"
      }
    ],
    "name": "getPatientInfo",
    "outputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "addres",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "phoneNo",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "bloodGroup",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "insuranceCompany",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "emergencyContacts",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "Precautions",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_adharCardNumber",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_Precautions",
        "type": "string"
      }
    ],
    "name": "UpdatePrecautions",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "d_id",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "ms",
        "type": "address"
      }
    ],
    "name": "myfunc",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "d_id",
        "type": "uint256"
      }
    ],
    "name": "giveAccessToDoctor",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "p_id",
        "type": "uint256"
      }
    ],
    "name": "addToinsurance",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_companyId",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "phone_no",
        "type": "uint256"
      }
    ],
    "name": "addInsurancecompany",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "Insu_id",
        "type": "uint256"
      }
    ],
    "name": "getInsuranceCompany",
    "outputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "phoneNo",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "string",
        "name": "_Medication",
        "type": "string"
      }
    ],
    "name": "addNotCoverdMedicationInInsurance",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint64",
        "name": "_adharCardNumber",
        "type": "uint64"
      }
    ],
    "name": "applyForInsurance",
    "outputs": [
      {
        "internalType": "string",
        "name": "InsuranceStatus",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "p_id",
        "type": "uint256"
      }
    ],
    "name": "recApp",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "appInsurance",
        "type": "uint256[]"
      },
      {
        "internalType": "string[]",
        "name": "iStatus",
        "type": "string[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "p_id",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "t_id",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "approve",
        "type": "string"
      }
    ],
    "name": "coverInsurance",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "patient_id",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "doctor_id",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "diagnosis",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "test_conducted",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "bill",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "date",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "medicine",
        "type": "string"
      }
    ],
    "name": "TreatPatient",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "_tiid",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "pid",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_tid",
        "type": "uint256"
      }
    ],
    "name": "getMbill",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "mbill",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "insu_status",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "pid",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_tid",
        "type": "uint256"
      }
    ],
    "name": "getTreatmentDetails",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "p_id",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "d_id",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "diagnosis",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "test_conducted",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "bill",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "date",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "medicine",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "p_id",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_medication",
        "type": "string"
      }
    ],
    "name": "addInsuranceKeep",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "doc_id",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "practice_type",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "area_of_expertize",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "phone_no",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "Address",
        "type": "string"
      }
    ],
    "name": "addDoctor",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_d_id",
        "type": "uint256"
      }
    ],
    "name": "getDoctorDetails",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "doc_id",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "practice_type",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "area_of_expertize",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "phone_no",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "Address",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_adharCardNumber",
        "type": "uint256"
      }
    ],
    "name": "requestAccessToPatient",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_adharCardNumber",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "OTP",
        "type": "uint256"
      }
    ],
    "name": "getDetailsOfAllTID",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "chem_id",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "Address",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "phone_no",
        "type": "uint256"
      }
    ],
    "name": "addChemist",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "chem_id",
        "type": "uint256"
      }
    ],
    "name": "getchemistinfo",
    "outputs": [
      {
        "internalType": "string",
        "name": "Address",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "phone_no",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "p_id",
        "type": "uint256"
      }
    ],
    "name": "giveMedicines",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "pid",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_tid",
        "type": "uint256"
      }
    ],
    "name": "getPTDetails",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "p_id",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "d_id",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "date",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "medicine",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "pid",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_tid",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amt",
        "type": "uint256"
      }
    ],
    "name": "uploadBill",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "Identify",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "val",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
];
export default new web3.eth.Contract(abi, address);