import os
import sys
sys.path.insert(0, os.path.abspath('..'))

import kernel_tuner

from nose import SkipTest
from nose.tools import nottest

@nottest
def skip_if_no_cuda_device():
    try:
        from pycuda.autoinit import context
    except (ImportError, Exception):
        raise SkipTest("PyCuda not installed or no CUDA device detected")

@nottest
def skip_if_no_opencl():
    try:
        import pyopencl
    except ImportError:
        raise SkipTest("PyOpenCL not installed")
    #this extra check was added because for some reason 'import pyopencl'
    #does not always result in an ImportError
    if 'namespace' in str(sys.modules['pyopencl']):
        raise SkipTest("PyOpenCL not installed")

